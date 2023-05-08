import { useState } from "react"
import { useDispatch } from "react-redux"
import { addSpotThunk } from "../../store/spotReducer"
import { useHistory } from "react-router-dom"

const CreateSpot = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [stateLocation, setStateLocation] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [name, setName] = useState('')
    const [previewImg, setPreviewImg] = useState('')
    const [img2, setImg2] = useState('')
    const [img3, setImg3] = useState('')
    const [img4, setImg4] = useState('')
    const [img5, setImg5] = useState('')
    const [errors, setErrors] = useState({})


    const spotSubmit = async (e) => {
        e.preventDefault()
        setErrors({})

        const newSpot ={
            country,
            address,
            city,
            state: stateLocation,
            description,
            price,
            name,
            previewImg,
            img2,
            img3,
            img4,
            img5
        }
        const spotRes = await dispatch(addSpotThunk(newSpot))
        console.log('newSpot response in component',spotRes)
        if(spotRes.errors){
            return setErrors(spotRes.errors)
        } else{
            history.push(`/spots/${spotRes.id}`)
        }
    }

    return(
        <>
            <h1>Create a new Spot</h1>
            <h2>Where's your place located?</h2>
            <h3>Guests will only get your exact address once they booked a reservation</h3>
            <form onSubmit={spotSubmit}>
                <label>Country
                    <input
                        type= "text"
                        value = {country}
                        onChange={(e)=> setCountry(e.target.value)}
                        placeholder="Country"
                    />
                </label>
                <label>Street Address
                    <input
                        type= "text"
                        value = {address}
                        onChange={(e)=> setAddress(e.target.value)}
                        placeholder="Street Address"
                    />
                </label>
                <label>City
                    <input
                        type= "text"
                        value = {city}
                        onChange={(e)=> setCity(e.target.value)}
                        placeholder="City"
                    />
                </label>
                <label>State
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
                </label>
                <h2>Create a title for your spot</h2>
                <label>Catch guests' attention with a spot title that highlights what makes your place special.
                    <input
                        type= "text"
                        value = {name}
                        onChange={(e)=> setName(e.target.value)}
                        placeholder="Name"
                    />
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
                </label>
                <h2>Liven up your spot with photos</h2>
                <label>Submit a link to at least one photo to publish your spot.
                    <input
                        type= "text"
                        value = {previewImg}
                        onChange={(e)=> setPreviewImg(e.target.value)}
                        placeholder="Preview Image URL"
                    />
                    <input
                        type= "text"
                        value = {img2}
                        onChange={(e)=> setImg2(e.target.value)}
                        placeholder="Image URL"
                    />
                    <input
                        type= "text"
                        value = {img3}
                        onChange={(e)=> setImg3(e.target.value)}
                        placeholder="Image URL"
                    />
                    <input
                        type= "text"
                        value = {img4}
                        onChange={(e)=> setImg4(e.target.value)}
                        placeholder="Image URL"
                    />
                    <input
                        type= "text"
                        value = {img5}
                        onChange={(e)=> setImg5(e.target.value)}
                        placeholder="Image URL"
                    />
                </label>
                <button type="submit">Create Spot</button>
            </form>
        </>
    )
}

export default CreateSpot
