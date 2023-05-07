import { singleSpotThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import './SpotShow.css'


const SpotShow = () => {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    console.log("spotId",spotId)
    const spot  = useSelector(state => state.spots[spotId])
    // console.log("spot in component",spot)

    useEffect(()=>{
        dispatch(singleSpotThunk(spotId))
    }, [dispatch])


    if (!spot) return (<h2>Loading...</h2>)
    console.log(spot)
    return(
        <>
            <div id="SpotWrapper">

                <h2 id="SpotName">{spot.name}</h2>
                <h4 id="SpotLocation">{spot.city}, {spot.state}, {spot.country}</h4>

                <div className="PhotoBlock">
                    {spot.SpotImages.map(image => (<img src={image.url}></img>))}
                </div>
                <div className="SpotInfo">
                    <div className="Description">
                        <h2>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
                        <p>{spot.description}</p>
                    </div>
                    <div className="ReservationInfo">
                        <p>{spot.price}</p>
                        <p>{spot.numReviews}</p>
                        <p>{spot.avgStarRating}</p>
                        <button>Reserve</button>
                    </div>
                </div>
            </div>
            {/* <p>{spot.reviews}</p> */}
        </>
    )
}

export default SpotShow
