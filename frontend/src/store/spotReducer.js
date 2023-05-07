import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_SPOTS = 'spots/loadSpots'
const  LOAD_SINGLE_SPOT = 'spots/loadSingleSpot'


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


// here go the thunks
export const loadSpotsThunk = () => async (dispatch) =>{
    const response = await csrfFetch('/api/spots')
    const spots = await response.json()
    dispatch(loadSpotsAction(spots))
}

export const singleSpotThunk = (spotId) => async (dispatch, getState) => {
    const response = await csrfFetch(`/api/spots/${spotId}`)
    const spot = await response.json()
    console.log("spot in thunk",spot)
    dispatch(loadSingleSpotAction(spot))
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
            return spotsState
        case LOAD_SINGLE_SPOT:
            // console.log("inreducer" ,action)
            return {...state, [action.spot.id]: action.spot}
        default:
            return state
    }
}

export default spotsReducer
