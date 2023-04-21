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


router.delete('/:reviewImageId', async(req, res)=>{
    const loggedInUserId = req.user.dataValues.id
    const reviewImageId = req.params.reviewImageId
    // console.log(spotImageId)
    let reviewImage = await ReviewImage.findByPk(reviewImageId)
    if(!reviewImage){
        return res.status(404).json({
            message: "Review image couldn't be found"
        })
    }

    // reviewImage = reviewImage.toJSON()

    let review = await Review.findByPk(reviewImage.dataValues.reviewId)
    review = review.toJSON()

    console.log(review)
    //checking to verify that user is the owner
    if (loggedInUserId !== review.userId){
        return res.status(403).json({
            message: "THIS IS NOT YOUR BEAUTIFUL REVIEW!"
        })
    }

    await reviewImage.destroy()
    return res.status(200).json({
        message: "Successfully deleted!"
    })
})





module.exports = router;
