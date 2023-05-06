import { loadSpotsThunk } from "../../store/spotReducer"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"


const SpotsIndex = () => {
    const dispatch = useDispatch()
    const spotsObj = useSelector(state => state.spots)
    useEffect(()=>{
        dispatch(loadSpotsThunk())
        console.log("incomponent",spotsObj)
    }, [dispatch])

    console.log(spotsObj)

    return (
        <>
            <h1>Fairs</h1>
            {Object.values(spotsObj).map(spot=>{
                return(
                    <>
                        <p>{spot.name}</p>
                        <p>{spot.city}</p>
                    </>
                )
            })}
        </>
    )
}

export default SpotsIndex
