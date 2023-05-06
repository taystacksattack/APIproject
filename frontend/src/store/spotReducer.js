import { csrfFetch } from "./csrf"

// here go the action type constants
const LOAD_SPOTS = 'spots/loadSpots'


//here go the action creators
export const loadSpotsAction = (spots) =>{
    return{
        type: LOAD_SPOTS,
        spots
    }
}


// here go the thunks
export const loadSpotsThunk = () => async (dispatch) =>{
    const response = await csrfFetch('/api/spots')
    const spots = await response.json()
    dispatch(loadSpotsAction(spots))
}


const spotsReducer = (state = {}, action) => {
    switch (action.type){
        case LOAD_SPOTS:
            const spotsState = {}
            const spotsArray = action.spots.Spots
            console.log("action.spots",spotsArray)
            spotsArray.forEach(spot=>{
                spotsState[spot.id] = spot
                // console.log("HELLO",spot)
            })
            return spotsState
        default:
            return state
    }
}

export default spotsReducer
