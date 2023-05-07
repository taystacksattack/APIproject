import { loadSpotsThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import './Spots.css'


const SpotsIndex = () => {
    const dispatch = useDispatch()
    const spotsObj = useSelector(state => state.spots)
    useEffect(()=>{
        dispatch(loadSpotsThunk())
    }, [dispatch])

    // console.log(spotsObj)

    return (
        <>
            {/* <h1>Fairs</h1> */}
            <div id="SpotsWrapper">
            {Object.values(spotsObj).map(spot=>{
                return(
                    <>
                        <div id="SingleSpot">
                            <img src={spot.previewImage} id="SpotImage"></img>
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
