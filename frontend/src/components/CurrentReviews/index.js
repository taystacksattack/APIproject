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
    console.log("reviews.newState back in component",reviews.newState)

    if (!(reviews.newState)) return (<h2>Loading...</h2>)
    console.log("WTF",Object.values(reviews.newState))
    return (
        <>
        <div>
            <h2> Manage Reviews</h2>
            {/* <h2>test</h2> */}
            {/* {!(Object.values(reviews.user)) ? (<h2>Loading...</h2>): null} */}
            {Object.values(reviews.newState).map(review => {
                return (
                    <>
                        <p>{review.Spot.name}</p>
                        <p>{review.createdAt.slice(5,10)}-{review.createdAt.slice(0,4)}</p>
                        <p>{review.review}</p>
                        <></>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default CurrentReviews


                                    // <h3>{currentUser.firstName}</h3>
                                    // <h3>{review.createdAt.slice(5,10)}-{review.createdAt.slice(0,4)}</h3>
                                    // <p>{reviews.review}</p>
                                    // {review.userId === currentUser.id ? <button className="regButtons" onClick={e=>deleteReview(review.id)}>Delete Review</button> : null}
