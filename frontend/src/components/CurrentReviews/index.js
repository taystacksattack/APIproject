import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { loadReviewsThunk, deleteReviewThunk, loadUserReviewsThunk } from "../../store/reviewReducer"



const CurrentReviews = ()=>{
    const dispatch = useDispatch()
    const reviews = useSelector(state=>{
        // console.log("basic state in reviews useSelector",state)
        return state.reviews
    })

    const currentUser = useSelector(state => state.session.user)

    useEffect(()=>{
        dispatch(loadUserReviewsThunk())
    }, [dispatch])

    console.log("reviews back in component",reviews)

    return (
        <>
        {/* <div>
            {!(Object.values(reviews)) ? (<h2>Loading...</h2>): null}
                {Object.values(reviews).map(review=>{
            // <h3>{currentUser.firstName}</h3>
                    <h3>{review.createdAt.slice(5,10)}-{review.createdAt.slice(0,4)}</h3>
                    <p>{review.review}</p>
                    {review.userId === currentUser.id ? <button className="regButtons" onClick={e=>deleteReview(review.id)}>Delete Review</button> : null}
                }
        </div> */}
        </>
    )
}

export default CurrentReviews
