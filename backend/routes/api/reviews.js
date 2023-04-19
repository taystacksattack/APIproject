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

    let result = {Reviews: reviews}

    res.status(200).json(result)
})











module.exports = router;
