import { singleSpotThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './SpotShow.css'
import { loadReviewsThunk, deleteReviewThunk } from "../../store/reviewReducer"
import OpenModalButton from "../OpenModalButton"
import ReviewFormModal from "../ReviewFormModal"
import DeleteReviewModal from "../DeleteReviewModal"



const SpotShow = () => {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    const [match, setMatch]= useState(false)
    const [hidden, setHidden] = useState('ReviewButton')

    const spot  = useSelector(state => state.spots[spotId])
    const reviews = useSelector(state=>{
        // console.log("basic state in reviews useSelector",state)
        return state.reviews
        console.log("state reviews",state.review)
    })
    const currentUser = useSelector(state => state.session.user)
    console.log("currentUser",currentUser)
    // console.log("reviews in SpotShow",reviews)

    useEffect(()=>{
        dispatch(singleSpotThunk(spotId))
        dispatch(loadReviewsThunk(spotId))
    }, [dispatch, spotId])


    const reviewUserId =[]
    Object.values(reviews).forEach(review => {
        reviewUserId.push(review.userId)
        console.log("reviewUserId", reviewUserId)
    });

    // useEffect(()=>{
    //     if(currentUser.id === review.userId) setHidden('hidden')
    // }, [review])


    // const reviewCheck = (review) =>{
    //     console.log("review in review check",review)
    //     if(currentUser.id === review.userId) setHidden('hidden')
    // }

    const reserveAlert = e => alert("Feature coming soon...")

    const deleteReview = async (reviewId) => {
        dispatch(deleteReviewThunk(reviewId))
            .then(loadReviewsThunk(spotId))
    }

    console.log("currentUser",currentUser)
    if (!spot || !spot.Owner || !reviews) return (<h2>Loading...</h2>)
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
                            <p id="price">${spot.price} night</p>
                            <p></p>
                        {spot.numReviews === 1? <h4><i class="fa-solid fa-star"></i> • {Math.round((spot.avgStarRating)*100)/100} - {spot.numReviews} review</h4>: null}
                        {spot.numReviews === 0 ?<h4><i class="fa-solid fa-star"></i>New</h4>: null}
                        {spot.avgStarRating && spot.numReviews > 1 ? <h4> <i class="fa-solid fa-star"></i> • {Math.round((spot.avgStarRating)*100)/100} stars - {spot.numReviews} reviews</h4>: null}
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
                {spot.avgStarRating && spot.numReviews === 1? <h4><i class="fa-solid fa-star"></i> {Math.round((spot.avgStarRating)*100)/100} - {spot.numReviews} review</h4>: null}
                {spot.avgStarRating ? <h2><i class="fa-solid fa-star"></i> {Math.round((spot.avgStarRating)*100)/100} stars • {spot.numReviews} reviews</h2> : <h2>Be the first to leave a review!</h2>}
                {/* <button id="ReserveButton"> Post Your Review</button> */}
                {!currentUser || reviewUserId.includes(currentUser.id) || currentUser.id === spot.ownerId ?  null
                :
                <div>
                    <OpenModalButton
                        id={hidden}
                        className="ReviewButton"
                        buttonText="Post Your Review"
                        modalComponent={<ReviewFormModal spot={spot}/>}
                    />
                </div>
                }

                <div>
                    {!(Object.values(reviews)) ? (<h2>Loading...</h2>): null}
                    {Object.values(reviews).reverse().map(review=>{

                        console.log("review in map thing", review)


                        // reviewCheck(review)
                        //state doesn't update immediately after posting a review, so it errors out when looking for a first name
                        //the object that comes back form the back end doesn't provide the username, which is required to display here
                        //REMOVING THE FOLLOWING IF BLOCK WILL GIVE YOU AN ERROR WHEN YOU POST A REVIEW
                        if(!review.User){
                            return (
                                <div>
                                    <h3>{currentUser.firstName}</h3>
                                    <h3>{review.createdAt.slice(5,10)}-{review.createdAt.slice(0,4)}</h3>
                                    <p>{review.review}</p>
                                    {/* {review.userId === currentUser.id ? <button className="regButtons" onClick={e=>deleteReview(review.id)}>Delete Review</button> : null} */}
                                </div>
                            )
                        } else{
                            return(
                                <div>
                                    <h3>{review.User.firstName}</h3>
                                    <h3>{review.createdAt.slice(5,10)}-{review.createdAt.slice(0,4)}</h3>
                                    <p>{review.review}</p>
                                    {currentUser && review.userId === currentUser.id ? <OpenModalButton
                                    className="ReviewButton"
                                    buttonText="Delete Review"
                                    modalComponent={<DeleteReviewModal review={review}/>}
                                    /> : null}
                                </div>
                            )
                        }
                    })
                }
                </div>
            </div>
        </>
    )
}

export default SpotShow
