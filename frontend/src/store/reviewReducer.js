import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_REVIEWS = 'spots/loadReviews'
const  LOAD_SINGLE_REVIEW = 'spots/loadSingleReview'
const ADD_REVIEW = 'reviews/addReview'


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

export const addReviewAction = (newReview) => {
    return {
        type: ADD_REVIEW,
        newReview
    }
}


// here go the thunks

//load all the reviews
export const loadReviewsThunk = (spotId) => async (dispatch) =>{
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`)
    const reviews = await response.json()
    // console.log("reviews in thunk from server",reviews)
    dispatch(loadReviewsAction(reviews))
}

//load a single review
export const singleReviewThunk = (spotId) => async (dispatch, getState) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    const review = await response.json()
    // console.log("review in thunk",review)
    dispatch(loadSingleReviewAction(review))
}

//add Review
export const addReviewThunk = (newReview) => async (dispatch) => {
    console.log("newReview", newReview)
    let response
    try {
        response = await csrfFetch(`/api/spots/${newReview.spotId}/reviews`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newReview)
        })
        const reviewRes = await response.json()
        console.log('response in thunk after backend', reviewRes)
        dispatch(addReviewAction(newReview))
        console.log("new review after dispatch", reviewRes)
        return reviewRes
    }catch(e){
        console.log("errors on the backend", e)
        const errors = await e.json()
        return errors
    }
}




const initialState = {spot: {}, user: {}}

//here go the reducer
const reviewsReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_REVIEWS:
            let reviewsState = {...state}
            reviewsState.spot = {...state.spot}
            reviewsState.user = {...state.user}
            const reviewsArray = action.reviews
            console.log("reviewsState",reviewsState)
            console.log("reviewsArray",reviewsArray)
            reviewsArray.Reviews.forEach(review=>{
                console.log(review)
                reviewsState.spot[review.spotId][review.id] = review
            })
            console.log("reviewsstate final reassignment", reviewsState)
            return reviewsState
        // case LOAD_SINGLE_REVIEW:
            // console.log("inreducer" ,action)
            // return {...state, [action.spot.id]: action.spot}
        case ADD_REVIEW:
            console.log("action add reviews in reducer", action)
            console.log("state in reducer", state)
            reviewsState = {...state}
            reviewsState.spot = {...state.spot}
            reviewsState.user = {...state.user}
            console.log("reviewsState",reviewsState)
            // return (console.log("smooches"))
            return {...state,
                spot:{ }
            }
        default:
            return state
    }
}

export default reviewsReducer
