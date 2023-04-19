const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { SpotImage } = require('../../db/models')
const { Review } = require('../../db/models')
const { ReviewImage } = require('../../db/models')
const { User } = require('../../db/models')


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

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

//gets all the reviews
router.get('/current', requireAuth, async(req,res)=>{
    const targetUserId = req.user.toJSON().id
    const reviews = await Review.findAll({
        where:{
            userId: targetUserId
        },
        include: [
            {
            model: User,
            attributes: ['id', 'firstName', 'lastName']
            },
            {model: Spot},
            {model:ReviewImage}
        ]
    })

    if(!reviews) {
        return res.status(404).json({
            message: "Spot couldn't be found"
        })
    }

    let result = {Reviews: reviews}

    res.status(200).json(result)
})

router.post('/:reviewId/images', async(req, res)=>{
    const { url } = req.body
    const targetReviewId = req.params.reviewId

    const review = await Review.findByPk(targetReviewId)
    if(!review){
        return res.status(404).json({
            message: "Review couldn't be found."
        })
    }

    let reviewImagesCount = await ReviewImage.findAll({
        where:{
            reviewId: targetReviewId
        }
    })

    if(reviewImagesCount.length>10){
        return res.status(403).json({
            "message": "Maximum number of images for this resource was reached"
          })
    }

    const reviewImage = await ReviewImage.create({
        reviewId: targetReviewId,
        url
    })


    const result = {
        id: reviewImage.id,
        url: reviewImage.url
    }

    res.json(result)
})

router.put('/:reviewId', requireAuth, validateReview, async(req,res)=>{
    const targetReviewId = req.params.reviewId
    const currentUser = req.user.dataValues.id
    const{ review, stars } = req.body


    const reviewToEdit = await Review.findByPk(targetReviewId)
    if(!reviewToEdit) {
        return res.status(404).json({
            message: "Review couldn't be found"
        })
    }
    if (currentUser !== reviewToEdit.userId){
        return res.status(403).json({
            message: "THIS IS NOT YOUR BEAUTIFUL REVIEW!"
        })
    }

    await reviewToEdit.update({review, stars})
    return res.status(200).json(reviewToEdit)
})

router.delete('/:reviewId', requireAuth, async(req,res)=>{
    const targetReviewId = req.params.reviewId
    const currentUser = req.user.dataValues.id

    const reviewToDelete = await Review.findByPk(targetReviewId)
    if(!reviewToDelete) {
        return res.status(404).json({
            message: "Review couldn't be found"
        })
    }
    if (currentUser !== reviewToDelete.userId){
        return res.status(403).json({
            message: "THIS IS NOT YOUR BEAUTIFUL REVIEW!"
        })
    }

    await reviewToDelete.destroy()
    return res.status(200).json({
        message: "Successfully deleted!"
    })
})





module.exports = router;
