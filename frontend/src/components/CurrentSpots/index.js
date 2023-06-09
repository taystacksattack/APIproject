import { loadUserSpotsThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import '../Spots/Spots.css'
import { useHistory } from "react-router-dom"
import { NavLink } from "react-router-dom"
import OpenModalButton from '../OpenModalButton'
import DeleteSpotModal from "../DeleteSpotModal"


const CurrentSpots = () => {
    // const history = useHistory()
    const dispatch = useDispatch()
    const spotsObj = useSelector(state => state.spots)
    // console.log("in current spots", spotsObj)
    // const userObj = useSelector(state => state.session.user)
    useEffect(()=>{
        dispatch(loadUserSpotsThunk())
    }, [dispatch, ])

    if(!spotsObj.currentUserSpots) return (<div>Loading</div>)

    return (
        <>
            <h1>Manage your spots</h1>
            <NavLink exact to = "/spots/new" id="NewSpotLink" >
                Create a New Spot
            </NavLink>
            <div id="SpotsWrapper">
            {Object.values(spotsObj.currentUserSpots).map(spot=>{
                // console.log("USERSPOTS",spot)
                return(
                    <>
                        <NavLink exact to = {`/spots/${spot.id}`} id="SingleSpot">
                            <img
                            src={spot.previewImage}
                            id="SpotImage"
                            alt= {spot.name}

                            >
                            </img>
                            {/* <p className="SpotInfo" id="SpotName">{spot.name}</p> */}
                            <div id="TopLine">
                                <p className="SpotInfo" id="SpotLocation">{spot.city}, {spot.state}</p>
                                <p className="SpotInfo" id="SpotRating">{spot.avgRating}</p>
                            </div>
                            <p className="SpotInfo" id="SpotPrice">${spot.price} per night</p>
                            <div>
                                <NavLink to={`/spots/${spot.id}/edit`} >Update</NavLink>
                                {/* <NavLink to={`/spots/:spotId/delete`}>Delete</NavLink> */}
                                <OpenModalButton
                                buttonText="Delete"
                                modalComponent={<DeleteSpotModal spot={spot}/>}
                                />
                            </div>
                        </NavLink>
                    </>
                )
            })}
            </div>
        </>
    )
}

export default CurrentSpots
