import { useDispatch, useSelector } from "react-redux";
import EditSpotForm from "../EditSpotForm";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import { singleSpotThunk } from "../../store/spotReducer";


const EditSpot = () => {
    const dispatch = useDispatch()
    const {spotId} = useParams()

    const spot = useSelector(state => state.spots[spotId])

    useEffect(()=>{
        dispatch(singleSpotThunk(spotId))
    }, [dispatch, spotId])

    if(!spot) return (<div>Loading...</div>)

    return(
        <>
            <EditSpotForm  spot={spot}/>
        </>
    )
}

export default EditSpot
