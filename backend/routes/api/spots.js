const express = require('express');
const bcrypt = require('bcryptjs');
const {Op} = require('sequelize')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { SpotImage } = require('../../db/models')
const { Review } = require('../../db/models')
const { ReviewImage } = require('../../db/models')
const { Booking } = require('../../db/models')
const { User } = require('../../db/models')


const { check } = require('express-validator');
// const { validationResult } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        // .isAlphanumeric()
        .isLength({ min: 5, max: 150 })
        .withMessage('Street address is required.'),
    check('city')
        .exists({ checkFalsy: true })
        // .isAlphanumeric()
        .isLength({ min: 5, max: 50 })
        .withMessage('City is required.'),
    check('state')
        .exists({ checkFalsy: true })
        .isAlpha()
        .isLength({ min: 4, max: 25 })
        .withMessage('State is required.'),
    check('country')
        .exists({ checkFalsy: true })
        .isLength({ min: 4, max: 100 })
        .withMessage('Country is required.'),
    check('lat')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Latitude is not valid.'),
    check('lng')
        .exists({ checkFalsy: true })
        .isDecimal()
        .withMessage('Longitude is not valid.'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ min: 1, max: 50 })
        .withMessage('Name must be less than 50 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 500 })
        .withMessage('Description is required.'),
    check('price')
        .exists({ checkFalsy: true })
        .isNumeric()
        .withMessage('Price per day is required.'),
    handleValidationErrors
  ];

const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .isLength({ min: 5, max: 500 })
        .withMessage('Review text is required.'),
    check('stars')
        .exists({ checkFalsy: true })
        .isInt({min: 1, max: 5})
        .withMessage('Stars must be an integer from 1 to 5.'),
    handleValidationErrors
]

// const validateQuery = [
//     check('page')
//         .isInt({min: 1})
//         .withMessage('Page must be greater than or equal to 1.'),
//     check('size')
//         .isInt({min: 1})
//         .withMessage('Size must be greater than or equal to 1.'),
//     handleValidationErrors
// ]


//get bookings for a spot based on spotId
router.get('/:spotId/bookings', requireAuth, async(req, res)=>{
    const loggedInUserId = req.user.dataValues.id
    const targetSpotId = req.params.spotId

    const spot = await Spot.findByPk(targetSpotId)
    if(!spot){
        res.status(404).json({
            message: "Spot couldn't be found"
          })
    }

    let bookings

    if(loggedInUserId !== spot.ownerId){
        bookings = await Booking.findAll({
            where:{
                spotId: targetSpotId
            },
            attributes:['spotId','startDate','endDate']
        })
    }

    if(loggedInUserId === spot.ownerId){
        bookings = await Booking.findAll({
            where:{
                spotId: targetSpotId
            },
            include: {
                model: User,
                attributes:['id','firstName','lastName']
            }
        })
    }

    const result = {Bookings: bookings}
    res.json(result)
})

//get reviews by spotId
router.get('/:spotId/reviews', async (req,res)=>{
    const targetSpotId = req.params.spotId

    let reviews = await Review.findAll({
        where:{
            spotId: targetSpotId
        },
        include:[
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            },
            {model:ReviewImage}
        ]
    })

    const result = {Reviews: reviews}
    res.status(200).json(result)
})


//get spots of logged in user
router.get('/current', requireAuth, async(req,res)=>{
    loggedInUserId = req.user.dataValues.id

    let spots = await Spot.findAll({
        where:{
            ownerId: loggedInUserId
        },
    })

    let result = {Spots:[]}
    for (let spot of spots){
        //gets image and sets url as attribute
        spot = spot.toJSON()
        let previewImage = await SpotImage.findAll({
            where:{
                spotId: spot.id
            },
            attributes: ['url']
        })
        spot.previewImage = previewImage[0].url

        const count = await Review.count({
            where:{
                spotId: spot.id
            }
        })
        console.log(count)
        const sum = await Review.sum('stars',{
            where:{
                spotId: spot.id
            }
        })
        spot.avgRating = sum/count

        result.Spots.push(spot)
    }

    return res.json(result)
})

// gets the spots by id
router.get('/:spotId', async(req,res) => {
    const spotId = req.params.spotId
    const spot = await Spot.findByPk(spotId,{
        include:{
            model: SpotImage,
            attributes: ['id', 'url', 'preview']
        },
    })

    if(!spot){
        return res.status(404).json({message: "Spot couldn't be found"})
    }

    const reviews = await Review.findAll({
        where:{
            spotId: spotId
        }
    })

    const initial =0
    const sum = reviews.reduce((acc, review)=> acc + review.dataValues.stars, initial)
    spot.dataValues.numReviews = reviews.length
    spot.dataValues.avgStarRating = sum / reviews.length

    const owner = await User.findByPk(spot.dataValues.ownerId,{
        attributes: ['id','firstName','lastName']
    })

    spot.dataValues.Owner = owner

    return res.json({spot})
})

//parses request queries for get all spots
const queryParse = async(queryObj)=>{
    const {page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice} = queryObj

    const errorObject ={message: "Bad request", errors:''}
    const whereQuery = {}


    if(page){
        if(typeof(parseInt(page)) !== 'number' || 1 >= page || page > 10 ){
            errorObject.errors.page = "Page must be greater than or equal to 1"
        }
    }
    if(size){
        if(typeof(parseInt(size)) !== 'number' || 1 >= size || size > 20 ){
            errorObject.errors.size = "Size must be greater than or equal to 1"
        }
    }
    if(minLat){
        if(typeof(parseInt(minLat)) !== 'number'|| -180 > minLat || minLat > 180 ){
            errorObject.errors.minLat = "Minimum latitude is invalid"
        }
        whereQuery.lat = {[Op.gte]: parseInt(minLat)}
    }
    if(maxLat){
        if(typeof(parseInt(maxLat)) !== 'number' || -180 > maxLat || maxLat > 180 ){
            errorObject.errors.maxLat = "Maximum latitude is invalid"
        }
        whereQuery.lat = {[Op.lte]: parseInt(maxLat)}
    }
    if(minLat && maxLat){
        if(!(errorObject.errors.maxLat) || !(errorObject.errors.minLat)){
            whereQuery.lat = {[Op.between]: [parseInt(minLat),parseInt(maxLat)]}
        }
    }
    if(minLng){
        if(typeof(parseInt(minLng)) !== 'number' || -180 > minLng || minLng > 180 ){
            errorObject.errors.minLng = "Minimum longitude is invalid"
        }
        whereQuery.lng = {[Op.gte]: parseInt(minLng)}
    }
    if(maxLng){
        if(typeof(parseInt(maxLng)) !== 'number' || -180 > maxLng || maxLng > 180 ){
            errorObject.errors.maxLng = "Maximum longitude is invalid"
        }
        whereQuery.lng = {[Op.lte]: parseInt(maxLng)}
    }
    if(minLng && maxLng){
        if(!(errorObject.errors.maxLng) || !(errorObject.errors.minLng)){
            whereQuery.lng = {[Op.between]: [parseInt(minLng),parseInt(maxLng)]}
        }
    }
    if(minPrice){
        if(typeof(parseInt(minPrice)) !== 'number' || 0 >= minPrice ){
            errorObject.errors.minPrice = "Minimum price must be greater than or equal to 0"
        }
        whereQuery.price = {[Op.gte]: parseInt(minPrice)}
    }
    if(maxPrice){
        if(typeof(parseInt(maxPrice)) !== 'number' || 0 >= maxPrice ){
            errorObject.errors.maxPrice = "Maximum price must be greater than or equal to 0"
        }
        whereQuery.price = {[Op.gte]: parseInt(maxPrice)}
    }
    if(minPrice && maxPrice){
        if(!(errorObject.errors.maxPrice) || !(errorObject.errors.minPrice)){
            whereQuery.price = {[Op.between]: [parseInt(minPrice),parseInt(maxPrice)]}
        }
    }

    if(errorObject.errors) return errorObject
    return whereQuery
}

const paginationQuery = async(queryObj)=>{
    let {page, size} = queryObj
    const pagination = {}

    if(!page) page = 1
    if(!size) size = 20

    page = parseInt(page)
    size = parseInt(size)

    pagination.limit = size
    pagination.offset = size * (page-1)

    return pagination
}


// gets all the spots!
router.get('/', async(req,res)=>{

    const whereQuery = await queryParse(req.query)

    if(whereQuery.errors){
        // console.log(whereQuery.errors)
        return res.status(400).json(whereQuery)
    }
    // console.log("where query" , whereQuery)

    //gets pagination object
    const pagination = await paginationQuery(req.query)


    const spotImages = await SpotImage.findAll()
    const stars = await Review.findAll()
    let spots = await Spot.findAll({where: whereQuery, ...pagination})

    let {page} = req.query
    if(!page) page = 1
    let result = {Spots:[], page, size: pagination.limit}
    for (let spot of spots){
        //gets image and sets url as attribute
        spot = spot.toJSON()
        for (let spotImage of spotImages){
            if (spotImage.spotId === spot.id){
                spot.previewImage = spotImage.url
                // console.log(spot)
            }
        }

        //gets sum of star ratings and sets attribute in spots to the average
        let sum = 0
        let count = 0
        for (let review of stars){
            review = review.toJSON()
            if (review.spotId === spot.id){
                // console.log(review.stars)
                sum = sum + review.stars
                count++
            }
        }
        const avg = sum/count
        // console.log()
        spot.avgRating = avg
        // console.log(spot)
        result.Spots.push(spot)
    }

    return res.json(result)

})

//create a new booking based on spotId
router.post('/:spotId/bookings', requireAuth, async(req,res)=>{
    const currentUserId = req.user.dataValues.id

    const targetSpotId = req.params.spotId
    const {startDate, endDate} = req.body

    const spot = await Spot.findByPk(targetSpotId)
    if(!spot){
        res.status(404).json({
            message: "Whoa, this spot can't be found!"
        })
    }
    if(currentUserId === spot.ownerId){
        res.status(403).json({
            message: "Whoa, this is your spot! You don't need our permission to use it!"
        })
    }

    //testing if endDate before startDate
    let newStartDateMS = new Date(startDate)
    newStartDateMS = newStartDateMS.getTime()

    let newEndDateMS = new Date (endDate)
    newEndDateMS = newEndDateMS.getTime()

    if(newStartDateMS > newEndDateMS){
        res.status(400).json({
            message: "Bad Request",
            errors: {
                endDate: "End date cannot be on or before start date."
            }
        })
    }

    // bookingConflict
    const bookingConflictError = {
        message: "Sorry, this spot is already booked for the specified dates =,(",
        errors: {}
    }
    let currentBookings = await Booking.findAll()
    for (let booking of currentBookings){
        booking = booking.toJSON()

        let oldBookingStart = new Date (booking.startDate)
        oldBookingStart = oldBookingStart.getTime()
        let oldBookingEnd = new Date (booking.endDate)
        oldBookingEnd = oldBookingEnd.getTime()

        if(oldBookingStart <= newStartDateMS && newStartDateMS <= oldBookingEnd){
            bookingConflictError.errors.startDate = "Start date conflicts with an existing booking"
        }
        if(oldBookingStart <= newEndDateMS && newEndDateMS <= oldBookingEnd){
            bookingConflictError.errors.endDate = "End date conflicts with an existing booking"
        }
    }

    if (bookingConflictError.errors.startDate || bookingConflictError.errors.endDate){
        return res.status(403).json(bookingConflictError)
    }


    const newBooking = await Booking.create({
        spotId: parseInt(targetSpotId),
        userId: currentUserId,
        startDate,
        endDate
    })

    res.json(newBooking)
})


//creates a new review by a spot
router.post('/:spotId/reviews', requireAuth, validateReview, async(req, res)=>{
    const { review, stars } = req.body
    const currentUserId = req.user.dataValues.id
    const currentSpotId = req.params.spotId
    console.log()

    const spot = await Spot.findByPk(currentSpotId)
    if(!spot) {
        res.status(404).json({
            message: "Spot couldn't be found."
          })
    }

    const reviewCheck = await Review.findOne({
        where:{
            userId: currentUserId,
            spotId: currentSpotId
        }
    })
    if(reviewCheck){
        res.status(500).json({
            message: "User already has a review for this spot!"
        })
    }


    const newReview = await Review.create({
        userId: currentUserId,
        spotId: parseInt(currentSpotId),
        review,
        stars
    })

    res.status(201).json(newReview)
})


//adds picture to a spot if the logged in user is the owner.
router.post('/:spotId/images', requireAuth, async(req,res,next)=>{
    loggedInUserId = req.user.dataValues.id
    const spotId = req.params.spotId
    const spot = await Spot.findByPk(spotId)

    if(!spot){
        return res.status(404).json({message: "Spot couldn't be found"})
    }

    // console.log(spot.dataValues.ownerId)
    // console.log(loggedInUserId)
    if(loggedInUserId === spot.dataValues.ownerId){
        // console.log('test')
        const {url, preview} = req.body

        const newImage = await SpotImage.create({
            spotId: req.params.spotId,
            url,
            preview
        })

        return res.status(201).json({
            id: newImage.id,
            url,
            preview
        })
    }else{
        const e = res.status(403).json({message: "THIS IS NOT YOUR BEAUTIFUL HOUSE"})
        next(e)
    }
})


//create new spot
router.post('/', requireAuth, validateSpot, async(req,res,next)=>{
    loggedInUserId = req.user.dataValues.id

    const errorResult = {message: "Bad Request", errors:{}}

    const {address, city, state, country, lat, lng, name, description, price} = req.body

    // if(!address || !isNaN(address)) errorResult.errors.address = "Street address is required"
    // if(!city || !isNaN(city)) errorResult.errors.city = "City is required"
    // if(!state || !isNaN(state)) errorResult.errors.state = "State is required"
    // if(!country || !isNaN(country)) errorResult.errors.country = "Country is required"
    // if(!lat || isNaN(lat)) errorResult.errors.lat = "Latitude is not valid"
    // if(!lng || isNaN(lat)) errorResult.errors.lng = "Longitude is not valid"
    // if(name.length>50 || !isNaN(name)) errorResult.errors.name = "Name must be less than 50 characters"
    // if(!description) errorResult.errors.description = "Description is required"
    // if(!price || isNaN(price)) errorResult.errors.price = "Price per day is required"


    const newSpot = await Spot.create({
        ownerId: req.user.dataValues.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })

    return res.status(201).json(newSpot)

})

//consider using toJson() method to convert req.user to json and then key/update into that.

//handlalidationerrors works more like a function
router.put('/:spotId', requireAuth, validateSpot, async(req,res,next)=>{
    // const errorResult = {message: "Bad Request", errors:{}}
    const e = []
    loggedInUserId = req.user.dataValues.id
    const spot = await Spot.findByPk(req.params.spotId)

    if(!spot){
        return res.status(404).json({message: "Spot couldn't be found"})
    }
    if(loggedInUserId !== spot.dataValues.ownerId){
        return res.status(403).json({message: "THIS IS NOT YOUR BEAUTIFUL HOUSE"})
    }

    const {address, city, state, country, lat, lng, name, description, price} = req.body
    const variable = {address, city, state, country, lat, lng, name, description, price}


    await spot.update({address, city, state, country, lat, lng, name, description, price})

    await spot.save()
    return res.status(200).json(spot)


})

router.delete('/:spotId', requireAuth, async(req,res)=>{
    const user = req.user.toJSON()
    const spot = await Spot.findByPk(req.params.spotId)
    // console.log(spot)

    if(!spot){
        return res.status(404).json({message: "Spot couldn't be found"})
    }

    if(user.id !== spot.ownerId){
        return res.status(403).json({"message": "THIS IS NOT YOUR BEAUTIFUL HOUSE"})
    } else{
        await spot.destroy()
        res.status(200).json({
            "message": "Successfully deleted"
        })
    }
})

module.exports = router;


//old code related to edit a spot
// if(!address || !isNaN(address)) {
    //     errorResult.errors.address = "Street address is required"
    // } else {
    //     spot.dataValues.address = address
    // }
    // if(!city || !isNaN(city)){
    //     errorResult.errors.city = "City is required"
    // } else {
    //     spot.dataValues.city = city
    // }
    // if(!state || !isNaN(state)) {
    //     errorResult.errors.state = "State is required"
    // } else {
    //     spot.dataValues.state = state
    // }
    // if(!country || !isNaN(country)) {
    //     errorResult.errors.country = "Country is required"
    // } else {
    //     spot.dataValues.country = country
    // }
    // if(!lat || isNaN(lat)) {
    //     errorResult.errors.lat = "Latitude is not valid"
    // } else {
    //     spot.dataValues.lat = lat
    // }
    // if(!lng || isNaN(lat)) {
    //     errorResult.errors.lng = "Longitude is not valid"
    // } else {
    //     spot.dataValues.lng = lng
    // }
    // if(name.length>50 || !isNaN(name)) {
    //     errorResult.errors.name = "Name must be less than 50 characters"
    // } else {
    //     spot.dataValues.name = name
    // }
    // if(!description) {
    //     errorResult.errors.description = "Description is required"
    // }else {
    //     spot.dataValues.description = description
    // }
    // if(!price || isNaN(price)) {
    //     errorResult.errors.price = "Price per day is required"
    // } else {
    //     spot.dataValues.price = price
    // }
