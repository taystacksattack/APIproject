import { singleSpotThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import './SpotShow.css'
import { loadReviewsThunk } from "../../store/reviewReducer"


const SpotShow = () => {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    // console.log("spotId",spotId)
    const spot  = useSelector(state => state.spots[spotId])
    const reviews = useSelector(state=>state.reviews)
    console.log("reviews in SpotShow",reviews)

    useEffect(()=>{
        dispatch(singleSpotThunk(spotId))
        dispatch(loadReviewsThunk(spotId))
    }, [dispatch, spotId])

    const reserveAlert = e => alert("Feature coming soon...")

    if (!spot) return (<h2>Loading...</h2>)
    // console.log("spot", spot.SpotImages[0].url)
    return(
        <>
            <div id="SpotWrapper">

                <h2 id="SpotName">{spot.name}</h2>
                <h4 id="SpotLocation">{spot.city}, {spot.state}, {spot.country}</h4>

                <div className="PhotoBlock">
                    {/* {spot.SpotImages.map(image => (<img src={image.url}></img>))} */}
                    {/* <img key = "test" src={spot.SpotImages[0].url}></img> */}
                    <img id = "MainPhoto" alt = "test" src="https://www.thebostoncalendar.com/system/events/photos/000/291/853/original/fairs_near_boston_2019.jpg.jpeg?1565126930"></img>
                </div>
                <div className="SpotInfo">
                    <div className="Description">
                        <h2>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
                        <p>{spot.description}</p>
                    </div>
                    <div className="ReservationInfo">
                        <div className = "TopLine">
                            <h3>${spot.price} night</h3>
                            <p></p>
                        <h4>{spot.avgStarRating} stars - {spot.numReviews} review(s)</h4>
                        </div>
                        <button
                            id="ReserveButton"
                            onClick={e=> reserveAlert()}
                        >
                        Reserve
                        </button>
                    </div>
                </div>
            </div>
            {/* <p>{spot.reviews}</p> */}
            <div id="ReviewsWrapper">
                <h2>{spot.avgStarRating} stars - {spot.numReviews} review(s)</h2>
                <div>
                    {Object.values(reviews).map(review=>{
                        return(
                            <div>
                                <h3>{review.User.firstName}</h3>
                                <h3>{review.createdAt.slice(5,10)}-{review.createdAt.slice(0,4)}</h3>
                                <p>{review.review}</p>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SpotShow
