import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal, closeModal } from "../../context/Modal";
import { deleteSpotThunk } from "../../store/spotReducer";
import CurrentSpots from "../CurrentSpots";

const DeleteSpotModal = ({spot}) => {
    // console.log("HELLO",spot)
    const dispatch = useDispatch()
    const {closeModal} = useModal()


    const deleteSpot = () => {
        // console.log("indelete spot function",spot)
        // e.preventDefault()
        dispatch(deleteSpotThunk(spot.id))
            .then(closeModal)
    }

    return(
        <>
        <h2>Confirm Delete</h2>
        <h3>Are you sure you want to remove this spot from the listings? </h3>
        <button onClick={e => deleteSpot()}>Yes (delete spot)</button>
        <button>No (keep spot)</button>
        </>
    )
}

export default DeleteSpotModal
