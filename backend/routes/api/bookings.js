const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models')
const { Spot } = require('../../db/models');
const { SpotImage } = require('../../db/models')
const { Review } = require('../../db/models')
const { ReviewImage } = require('../../db/models')
const { Booking } = require('../../db/models')


const { check } = require('express-validator');
// const { validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//beginnings of middleware for date validations
// const validateDate = [
//     check('endDate')
//     .custom((value, { req }) => {
//         return new Date(value).getTime() >= new Date(req.body.startDate).getTime()
//     })
//     .withMessage('endDate cannot be on or before startDate'),
//     handleValidationErrors
// ];


//get bookings for a user
router.get('/current',requireAuth, async (req,res)=>{
    const loggedInUserId = req.user.dataValues.id

    const bookings = await Booking.findAll({
        where:{
            userId: loggedInUserId
        },
        include: [{
            model: Spot
        }]
    })


    const result = {Bookings: bookings}
    res.json(result)
})

// edit a booking
router.put('/:bookingId', requireAuth, async(req,res)=>{
    const currentUserId = req.user.dataValues.id
    const targetBookingId = req.params.bookingId

    const {startDate, endDate} = req.body

    let bookingToEdit = await Booking.findByPk(targetBookingId)

    //does this spot exist?
    if(!bookingToEdit){
        return res.status(404).json({
            message: "Booking couldn't be found"
        })
    }

    editedBooking = bookingToEdit.toJSON()

    let bookingSpot = await Spot.findByPk(editedBooking.spotId)
    bookingSpot = bookingSpot.toJSON()
    // console.log(bookingSpot)
    //checking to verify that user is the owner
    if (currentUserId !== bookingToEdit.userId){
        return res.status(403).json({
            message: "Forbidden! THIS IS NOT YOUR BEAUTIFUL RESERVATION!"
        })
    }

    //getting the new dates
    let newStartDateMS = new Date(startDate)
    newStartDateMS = newStartDateMS.getTime()
    let newEndDateMS = new Date (endDate)
    newEndDateMS = newEndDateMS.getTime()

    let oldEndDateMS = new Date (editedBooking.endDate)
    oldEndDateMS = oldEndDateMS.getTime()

    let currentDateMS = new Date().getTime()

    console.log(currentDateMS)
    console.log(oldEndDateMS)
    //verifying that the booking is not in the past
    if(oldEndDateMS<currentDateMS){
        console.log("test")
        return res.status(403).json({
            message: "Past bookings can't be modified"
          })
    }

    //are either of the updated dates in the past?
    if(newStartDateMS< currentDateMS || newEndDateMS < currentDateMS){
        return res.status(403).json({
            message: "Your new dates are in the past! What is this? Back to the Future?"
          })
    }




    //checking for end date after start date
    if(newStartDateMS > newEndDateMS){
        return res.status(400).json({
            message: "Bad Request",
            errors: {
                endDate: "End date cannot be on or before start date."
            }
        })
    }



    //for booking conflicts
    const bookingConflictError = {
        message: "Sorry, this spot is already booked for the specified dates =,(",
        errors: {}
    }

    let currentBookings = await Booking.findAll({
        where:{
            spotId: bookingSpot.id
        }
    })
    for (let booking of currentBookings){
        booking = booking.toJSON()

        let oldBookingStart = new Date (booking.startDate)
        oldBookingStart = oldBookingStart.getTime()
        let oldBookingEnd = new Date (booking.endDate)
        oldBookingEnd = oldBookingEnd.getTime()

        if(oldBookingStart <= newStartDateMS && newStartDateMS <= oldBookingEnd && booking.id !== editedBooking.id){
            bookingConflictError.errors.startDate = "Start date conflicts with an existing booking"
        }
        if(oldBookingStart <= newEndDateMS && newEndDateMS <= oldBookingEnd && booking.id !== editedBooking.id){
            bookingConflictError.errors.endDate = "End date conflicts with an existing booking"
        }
    }

    if (bookingConflictError.errors.startDate || bookingConflictError.errors.endDate){
        return res.status(403).json(bookingConflictError)
    }

    const result = await bookingToEdit.update({startDate, endDate})

    res.json(result)
})

router.delete('/:bookingId', requireAuth, async(req,res)=>{
    const bookingId = req.params.bookingId
    const bookingToDelete = await Booking.findByPk(bookingId)
    const currentUserId = req.user.dataValues.id


    if(!bookingToDelete){
        return res.status(404).json({
            message: "Booking couldn't be found"
        })
    }

    let bookingSpot = await Spot.findByPk(bookingToDelete.spotId)
    bookingSpot = bookingSpot.toJSON()
    // console.log(bookingSpot)
    //checking to verify that user is the owner
    if (currentUserId !== bookingToDelete.userId){
        return res.status(403).json({
            message: "Forbidden! THIS IS NOT YOUR BEAUTIFUL RESERVATION!"
        })
    }

    let startDateMS = new Date (bookingToDelete.startDate).getTime()
    let endDateMS = new Date (bookingToDelete.endDate).getTime()
    let currentDateMS = new Date().getTime()

    if(startDateMS < currentDateMS && currentDateMS < endDateMS){
        return res.status(403).json({
            message: "Bookings that have been started can't be deleted"
        })
    }

    await bookingToDelete.destroy()
    return res.status(200).json({
        message: "Successfully deleted!"
    })
})

module.exports = router;
