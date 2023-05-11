import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_REVIEWS = 'spots/loadReviews'
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
    const response = csrfFetch(`api/reviews/${reviewId}`,{
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
    switch (action.type){
        case LOAD_REVIEWS:
            console.log("action.reviews",action.reviews)
            return {...action.reviews}
        case ADD_REVIEW:
            console.log("newReview in reducer",action.newReview)
            console.log("state", state)
            return {...state, ...action.newReview}
        case DELETE_SINGLE_REVIEW:
            console.log('dogezilla')
            const newState = {...state}
            console.log("newstate in reduver",newState)
            // delete newState
            return newState
        default:
            return state
    }
}

export default reviewsReducer
