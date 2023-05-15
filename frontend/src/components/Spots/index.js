import { loadSpotsThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './Spots.css'
import { useHistory, NavLink } from "react-router-dom"


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
//
    return (
        <>
            {/* <h1>Fairs</h1> */}
            <div id="SpotsWrapper">
            {Object.values(spotsObj).map(spot=>{
                console.log(spot)
                return(
                    <>
                        <NavLink exact to = {`/spots/${spot.id}`}title = {spot.name} id="SingleSpot">
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
                                {!(spot.avgRating) ?(<p className="SpotInfo" id="SpotRating">New</p>): (<p className="SpotInfo" id="SpotRating"><i class="fa-solid fa-star"></i> {Math.round((spot.avgRating)*100)/100} stars {spot.numReviews}</p>)}
                            </div>
                            <p className="SpotInfo" id="SpotPrice">${spot.price} night</p>
                        </NavLink>
                    </>
                )
            })}
            </div>
        </>
    )
}

export default SpotsIndex
