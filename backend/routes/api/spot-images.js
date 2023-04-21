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
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


router.delete('/:spotImageId', requireAuth, async(req, res)=>{
    const loggedInUserId = req.user.dataValues.id
    const spotImageId = req.params.spotImageId
    // console.log(spotImageId)
    let spotImage = await SpotImage.findByPk(spotImageId)
    if(!spotImage){
        return res.status(404).json({
            message: "Spot image couldn't be found"
        })
    }

    // spotImage = spotImage.toJSON()

    let spot = await Spot.findByPk(spotImage.dataValues.spotId)
    spot = spot.toJSON()

    console.log(spot)
    //checking to verify that user is the owner
    if (loggedInUserId !== spot.ownerId){
        return res.status(403).json({
            message: "THIS IS NOT YOUR BEAUTIFUL HOUSE!"
        })
    }

    await spotImage.destroy()
    return res.status(200).json({
        message: "Successfully deleted!"
    })
})




module.exports = router;
