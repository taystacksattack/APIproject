import { singleSpotThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import './SpotShow.css'
import { loadReviewsThunk } from "../../store/reviewReducer"
import OpenModalButton from "../OpenModalButton"
import ReviewFormModal from "../ReviewFormModal"



const SpotShow = () => {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    // console.log("spotId",spotId)
    const spot  = useSelector(state => state.spots[spotId])
    const reviews = useSelector(state=>state.reviews)
    // console.log("reviews in SpotShow",reviews)

    useEffect(()=>{
        dispatch(singleSpotThunk(spotId))
        dispatch(loadReviewsThunk(spotId))
    }, [dispatch, spotId])

    const reserveAlert = e => alert("Feature coming soon...")

    if (!spot || !spot.Owner) return (<h2>Loading...</h2>)
    console.log("spot", spot.SpotImages[0])
    return(
        <>
            <div id="SpotWrapper">

                <h2 id="SpotName">{spot.name}</h2>
                <h4 id="SpotLocation">{spot.city}, {spot.state}, {spot.country}</h4>

                <div className="PhotoBlock">
                    {/* <img alt = {spot.name} id="PreviewImg"  src={spot.SpotImages[0].url}></img> */}
                    {spot.SpotImages[0] ? <img alt = {spot.name} id="PreviewImg"  src={spot.SpotImages[0].url}></img> : null}
                    {/* <img alt = "img1" src={spot.SpotImages[0].url}></img> */}
                    {/* <img alt = "img1" src={spot.SpotImages[0].url}></img> */}
                    <div id="SmallPhotoBlock">
                        {spot.SpotImages.slice(1).map(image => (<img alt = {spot.name} id="MiniImg"src={image.url}></img>))}
                        {/* <img id = "MainPhoto" alt = "test" src="https://www.thebostoncalendar.com/system/events/photos/000/291/853/original/fairs_near_boston_2019.jpg.jpeg?1565126930"></img> */}
                    </div>
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
                        {spot.avgStarRating && spot.numReviews === 1? <h4> {Math.round((spot.avgStarRating)*100)/100} stars - {spot.numReviews} review</h4>: null}
                        {spot.avgStarRating ? <h4> {Math.round((spot.avgStarRating)*100)/100} stars - {spot.numReviews} review(s)</h4>: <h4>New</h4>}
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
                {spot.avgStarRating ? <h2>{Math.round((spot.avgStarRating)*100)/100} stars - {spot.numReviews} review(s)</h2> : <h2>Be the first to leave a review!</h2>}
                {/* <button id="ReserveButton"> Post Your Review</button> */}
                <OpenModalButton className="ReviewButton"
                    buttonText="Post Your Review"
                    modalComponent={<ReviewFormModal spot={spot}/>}
                />
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
