import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_SPOTS = 'spots/loadSpots'
const LOAD_USER_SPOTS = 'spots/loadUserSpots'
const  LOAD_SINGLE_SPOT = 'spots/loadSingleSpot'
const ADD_SPOT = 'spots/addSpot'
const EDIT_SPOT = 'spots/editSpot'
const DELETE_SPOT = 'spots/deleteSpot'


//here go the action creators
export const loadSpotsAction = (spots) =>{
    return{
        type: LOAD_SPOTS,
        spots
    }
}

export const loadUserSpotsAction = (spots) =>{
    return{
        type: LOAD_USER_SPOTS,
        spots
    }
}

export const loadSingleSpotAction = (spot) =>{
    return{
        type: LOAD_SINGLE_SPOT,
        spot
    }
}

export const addSpotAction = (spot) => {
    return{
        type: ADD_SPOT,
        spot
    }
}

export const editSpotAction = (spot) =>{
    return{
        type: EDIT_SPOT,
        spot
    }
}

export const deleteSpotAction = (spotId) =>{
    return{
        type: DELETE_SPOT,
        spotId
    }
}


// here go the thunks
//load all spots
export const loadSpotsThunk = () => async (dispatch) =>{
    const response = await csrfFetch('/api/spots')
    const spots = await response.json()
    dispatch(loadSpotsAction(spots))
}
//load current user's spots
export const loadUserSpotsThunk = () => async (dispatch) =>{
    const response = await csrfFetch('/api/spots/current')
    const spots = await response.json()
    // console.log("in thunk",spots)
    dispatch(loadUserSpotsAction(spots))
}
//load selected spot
export const singleSpotThunk = (spotId) => async (dispatch, getState) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    const spot = await response.json()
    // console.log("spot in thunk",spot)
    dispatch(loadSingleSpotAction(spot))
}
//add a spot
export const addSpotThunk = (newSpot) => async (dispatch) => {
    console.log("in thunk before backend",newSpot)
    // console.log('hello?!')
    let response
    try{
        response = await csrfFetch('/api/spots',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newSpot)
    })
    const spotRes = await response.json()
    console.log('response in thunk after backend', spotRes)
    dispatch(addSpotAction(spotRes))
    console.log("spotres ", spotRes)
    return spotRes
    }
    catch(e){
        console.log("errors in catch block",e)

        const errors = await e.json()
        return errors
    }
}
//edut a spot
export const editSpotThunk = (spotToEdit) => async (dispatch) => {
    console.log("in thunk before backend",spotToEdit)
    console.log(spotToEdit.id)
    let response
    try{
        response = await csrfFetch(`/api/spots/${spotToEdit.id}`,{
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(spotToEdit)
    })
    const spotRes = await response.json()
    console.log('response in thunk after backend', spotRes)
    dispatch(addSpotAction(spotRes))
    console.log("spotres ", spotRes)
    return spotRes
}
    catch(e){
        console.log("errors in catch block",e)

        const errors = await e.json()
        return errors
    }
}
//delete a spot
export const deleteSpotThunk = (spotId) => async (dispatch, getState) => {
    // console.log(spotId)
    const response = await csrfFetch(`/api/spots/${spotId}`,{
        method:"DELETE"
    })
    if(response.ok){
        const finalRes = await response.json();
        dispatch(deleteSpotAction(spotId))
        return finalRes
    }
}



//here go the reducer
const spotsReducer = (state = {}, action) => {
    switch (action.type){
        case LOAD_SPOTS:
            const spotsState = {}
            const spotsArray = action.spots.Spots
            spotsArray.forEach(spot=>{
                spotsState[spot.id] = spot
            })
            // console.log(spotsState)
            return spotsState
        case LOAD_USER_SPOTS:
            const currentSpots = {}
            // console.log("in reduver",action.spots.Spots)
            action.spots.Spots.forEach(spot=> currentSpots[spot.id] = spot)
            return {...state, currentUserSpots : currentSpots}
        case LOAD_SINGLE_SPOT:
            // console.log("inreducer" ,action)
            return {...state, [action.spot.id]: action.spot}
        case ADD_SPOT:
            console.log("action in reducer",action)
            return {...state, [action.spot.id]: action.spot}
        case EDIT_SPOT:
            console.log("action in reducer",action)
            return {...state, [action.spot.id]: action.spot}
        case DELETE_SPOT:
            console.log("in reducer", action)
            const newState = {...state}
            console.log("state in reducer", state)
            delete newState[action.spotId]
            return newState
        default:
            return state
    }
}

export default spotsReducer
