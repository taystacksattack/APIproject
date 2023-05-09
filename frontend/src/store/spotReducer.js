import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_SPOTS = 'spots/loadSpots'
const  LOAD_SINGLE_SPOT = 'spots/loadSingleSpot'
const ADD_SPOT = 'spots/addSpot'
const EDIT_SPOT = 'spots/editSpot'


//here go the action creators
export const loadSpotsAction = (spots) =>{
    return{
        type: LOAD_SPOTS,
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


// here go the thunks
export const loadSpotsThunk = () => async (dispatch) =>{
    const response = await csrfFetch('/api/spots')
    const spots = await response.json()
    dispatch(loadSpotsAction(spots))
}

export const singleSpotThunk = (spotId) => async (dispatch, getState) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    const spot = await response.json()
    // console.log("spot in thunk",spot)
    dispatch(loadSingleSpotAction(spot))
}

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




//here go the reducer
const spotsReducer = (state = {}, action) => {
    switch (action.type){
        case LOAD_SPOTS:
            const spotsState = {}
            const spotsArray = action.spots.Spots
            // console.log("action.spots",spotsArray)
            spotsArray.forEach(spot=>{
                spotsState[spot.id] = spot
            })
            console.log(spotsState)
            return spotsState
        case LOAD_SINGLE_SPOT:
            // console.log("inreducer" ,action)
            return {...state, [action.spot.id]: action.spot}
        case ADD_SPOT:
            console.log("action in reducer",action)
            return {...state, [action.spot.id]: action.spot}
        case EDIT_SPOT:
            console.log("action in reducer",action)
            return {...state, [action.spot.id]: action.spot}
        default:
            return state
    }
}

export default spotsReducer
