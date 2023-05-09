import { loadSpotsThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './Spots.css'
import { useHistory } from "react-router-dom"


const SpotsIndex = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const spotsObj = useSelector(state => state.spots)
    // const userObj = useSelector(state => state.session.user)
    useEffect(()=>{
        dispatch(loadSpotsThunk())
    }, [dispatch])

    const linkToSpot = (spotId) => {
        // console.log(spotId)
        history.push(`/spots/${spotId}`)
    }

    return (
        <>
            {/* <h1>Fairs</h1> */}
            <div id="SpotsWrapper">
            {Object.values(spotsObj).map(spot=>{
                // console.log(spot)
                return(
                    <>
                        <div id="SingleSpot">
                            <img
                            src={spot.previewImage}
                            id="SpotImage"
                            alt= {spot.name}
                            // onclick= {linkToSpot(spot.id)}
                            >
                            </img>
                            {/* <p className="SpotInfo" id="SpotName">{spot.name}</p> */}
                            <div id="TopLine">
                                <p className="SpotInfo" id="SpotLocation">{spot.city}, {spot.state}</p>
                                <p className="SpotInfo" id="SpotRating">{spot.avgRating}</p>
                            </div>
                            <p className="SpotInfo" id="SpotPrice">${spot.price} per night</p>
                        </div>
                    </>
                )
            })}
            </div>
        </>
    )
}

export default SpotsIndex
