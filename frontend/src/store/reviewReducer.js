import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_REVIEWS = 'spots/loadReviews'
const  LOAD_SINGLE_REVIEW = 'spots/loadSingleReview'


//here go the action creators

//load reviews for a particular spot.
export const loadReviewsAction = (reviews) =>{
    return{
        type: LOAD_REVIEWS,
        reviews
    }
}

export const loadSingleReviewAction = (review) =>{
    return{
        type: LOAD_SINGLE_REVIEW,
        review
    }
}


// here go the thunks
export const loadReviewsThunk = (spotId) => async (dispatch) =>{
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    const reviews = await response.json()
    // console.log("reviews in thunk from server",reviews)
    dispatch(loadReviewsAction(reviews))
}

export const singleReviewThunk = (spotId) => async (dispatch, getState) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    const review = await response.json()
    // console.log("review in thunk",review)
    dispatch(loadSingleReviewAction(review))
}



//here go the reducer
const reviewsReducer = (state = {}, action) => {
    switch (action.type){
        case LOAD_REVIEWS:
            const reviewsState = {}
            const reviewsArray = action.reviews
            // console.log("action.reviews",reviewsArray.Reviews)
            reviewsArray.Reviews.forEach(review=>{
                reviewsState[review.id] = review
            })
            return reviewsState
        // case LOAD_SINGLE_REVIEW:
            // console.log("inreducer" ,action)
            // return {...state, [action.spot.id]: action.spot}
        default:
            return state
    }
}

export default reviewsReducer
