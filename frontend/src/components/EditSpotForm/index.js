import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSpotThunk, editSpotThunk } from "../../store/spotReducer"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router-dom"
import { singleSpotThunk } from "../../store/spotReducer"

const EditSpotForm = ({spot}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    console.log(spot)

    const [country, setCountry] = useState(spot?.country)
    const [address, setAddress] = useState(spot?.address)
    const [city, setCity] = useState(spot?.city)
    const [stateLocation, setStateLocation] = useState(spot?.state)
    const [description, setDescription] = useState(spot?.description)
    const [price, setPrice] = useState(spot?.price)
    const [name, setName] = useState(spot?.name)
    // const [previewImg, setPreviewImg] = useState(spot?.SpotImages[0]?.url)
    // const [img2, setImg2] = useState(spot?.SpotImages[1]?.url)
    // const [img3, setImg3] = useState(spot?.SpotImages[2]?.url)
    // const [img4, setImg4] = useState(spot?.SpotImages[3]?.url)
    // const [img5, setImg5] = useState(spot?.SpotImages[4]?.url)
    const [errors, setErrors] = useState({})


    const spotSubmit = async (e) => {
        e.preventDefault()
        setErrors({})

        const spotToEdit ={
            id : spot.id,
            country,
            address,
            city,
            state: stateLocation,
            description,
            price,
            name,
        }


        const spotRes = await dispatch(editSpotThunk(spotToEdit))

        if(spotRes.errors){
            setErrors(spotRes.errors)
        } else{
            history.push(`/spots/${spotRes.id}`)
        }
    }
    // console.log((previewImg.split('.')).includes('jpg' ||"png" ||"jpeg"))
    // console.log((previewImg.split('.')).includes('png' || 'jpg' || 'jpeg'))
    if(!spot) return (<div>Loading...</div>)

    return(
        <>
            <h1>Update your spot</h1>
            <h2>Where's your place located?</h2>
            <h3>Guests will only get your exact address once they booked a reservation</h3>
            <form onSubmit={spotSubmit}>
                <label>Country
                    <div className="errors">{errors.country}</div>
                    <input
                        type= "text"
                        value = {country}
                        onChange={(e)=> setCountry(e.target.value)}
                        placeholder="Country"
                    />
                </label>
                <label>Street Address
                    <div className="errors">{errors.address}</div>
                    <input
                        type= "text"
                        value = {address}
                        onChange={(e)=> setAddress(e.target.value)}
                        placeholder="Street Address"
                    />
                </label>
                <label>City
                    <div className="errors">{errors.city}</div>
                    <input
                        type= "text"
                        value = {city}
                        onChange={(e)=> setCity(e.target.value)}
                        placeholder="City"
                    />
                </label>
                <label>State
                    <div className="errors">{errors.state}</div>
                    <input
                        type= "text"
                        value = {stateLocation}
                        onChange={(e)=> setStateLocation(e.target.value)}
                        placeholder="State"
                    />
                </label>
                <h2>Describe your place to guests</h2>
                <label>Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood.
                    <textarea
                        type= "text"
                        value = {description}
                        onChange={(e)=> setDescription(e.target.value)}
                        placeholder="Description"
                    />
                    <div className="errors">{errors.description}</div>
                </label>
                <h2>Create a title for your spot</h2>
                <label>Catch guests' attention with a spot title that highlights what makes your place special.
                    <input
                        type= "text"
                        value = {name}
                        onChange={(e)=> setName(e.target.value)}
                        placeholder="Name"
                    />
                    <div className="errors">{errors.name}</div>
                </label>
                <h2>Set a base price for your spot</h2>
                <label>Competitive pricing can help your listing stand out and rank higher in search results.
                    <p>$</p>
                    <input
                        type= "text"
                        value = {price}
                        onChange={(e)=> setPrice(e.target.value)}
                        placeholder="Price per night (USD)"
                    />
                    <div className="errors">{errors.price}</div>
                </label>
                <button type="submit">Edit Spot</button>
            </form>
        </>
    )
}

export default EditSpotForm
