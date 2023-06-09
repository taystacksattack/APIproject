import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_REVIEWS = 'spots/loadReviews'
const LOAD_USER_REVIEWS = 'reviews/loadUserReviews'
const  LOAD_SINGLE_REVIEW = 'spots/loadSingleReview'
const ADD_REVIEW = 'reviews/addReview'
const DELETE_SINGLE_REVIEW = 'reviews/deleteReview'


//here go the action creators

//load reviews for a particular spot.
export const loadReviewsAction = (reviews) =>{
    return{
        type: LOAD_REVIEWS,
        reviews
    }
}

export const loadUserReviewsAction = (reviews) =>{
    return{
        type: LOAD_USER_REVIEWS,
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

export const deleteSingleReviewAction = (reviewId) => {
    return{
        type: DELETE_SINGLE_REVIEW,
        reviewId
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


//load current user's reviews
export const loadUserReviewsThunk = (userId) => async (dispatch) => {
    const response = await csrfFetch(`/api/reviews/current`)
    const reviews = await response.json()
    console.log("reviews in thunk from server",reviews)
    dispatch(loadUserReviewsAction(reviews))
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
        dispatch(addReviewAction(reviewRes))
        console.log("new review after dispatch", reviewRes)
        return reviewRes
    }catch(e){
        console.log("errors on the backend", e)
        const errors = await e.json()
        console.log("errors from the backend with json",errors)
        return errors
    }
}

export const deleteReviewThunk = (reviewId)=> async (dispatch, getState) => {
    console.log("reviewId",reviewId)
    const response = await csrfFetch(`/api/reviews/${reviewId}`,{
        method: "DELETE"
    })
    console.log("response in thunk",response)
    if (response.ok){
        const finalRes = (await response).json()
        dispatch(deleteSingleReviewAction(reviewId))
        return finalRes
    }
}



// const initialState = {spot: {}, user: {}}

//here go the reducer
const reviewsReducer = (state = {}, action) => {
    let newState = {}
    switch (action.type){

        case LOAD_REVIEWS:

            console.log("action.reviews",action.reviews)
            action.reviews.forEach(review => {
                newState[review.id] = review
            })
            console.log(newState)
            return newState

        case LOAD_USER_REVIEWS:

            console.log("action.reviews",action.reviews.Reviews)
            action.reviews.Reviews.forEach(review => {
                console.log("review in foreach", review)
                newState[review.id] = review
            })
            console.log("newState",newState)
            return {...state, newState}

        case ADD_REVIEW:
            console.log("newReview in reducer",action.newReview)
            console.log("state after review is added", state)
            return {...state, [action.newReview.id] : action.newReview}
        case DELETE_SINGLE_REVIEW:
            console.log('dogezilla')
            newState = {...state}
            console.log("newstate in reducer",newState)
            delete newState[action.reviewId]
            return newState
        default:
            return state
    }
}

export default reviewsReducer
