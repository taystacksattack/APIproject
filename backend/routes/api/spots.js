const express = require('express');
const bcrypt = require('bcryptjs');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { SpotImage } = require('../../db/models')
const { Review } = require('../../db/models')
const { User } = require('../../db/models')


const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// gets all the spots!
router.get('/', async(req,res)=>{
    const spotImages = await SpotImage.findAll()
    const stars = await Review.findAll()
    const spots = await Spot.findAll()

    for (const spot of spots){
        //gets image and sets url as attribute
        for (const spotImage of spotImages){
            if (spotImage.dataValues.spotId === spot.dataValues.id){
                spot.dataValues.previewImage = spotImage.dataValues.url
            }
        }

        //gets sum of star ratings and sets attribute in spots to the average
        let sum = 0
        let count = 0
        for (const review of stars){
            if (review.dataValues.spotId === spot.dataValues.id){
                console.log(review.dataValues.stars)
                sum = sum + review.dataValues.stars
                count++
            }
        }
        const avg = sum/count
        spot.dataValues.avgRating = avg
    }

    return res.json(spots)
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

    // spot.toJSON()
    // return spot
    return res.json({spot})
})

//create new spot
router.post('/', requireAuth, async(req,res)=>{
    const {address, city, state, country, lat, lng, name, description, price} = req.body

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

    res.status(201).json(newSpot)
})


module.exports = router;
