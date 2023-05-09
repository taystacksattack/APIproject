import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal, closeModal } from "../../context/Modal";
import { deleteSpotThunk } from "../../store/spotReducer";
import CurrentSpots from "../CurrentSpots";
import './DeleteSpotModal.css'

const DeleteSpotModal = ({spot}) => {
    // console.log("HELLO",spot)
    const dispatch = useDispatch()
    const {closeModal} = useModal()


    const deleteSpot = () => {
        dispatch(deleteSpotThunk(spot.id))
            .then(closeModal)
    }

    return(
        <>
            <div id="DeleteModal">
                <h2>Confirm Delete</h2>
                <h3>Are you sure you want to remove this spot from the listings? </h3>
                <div className="DeleteButtons">
                    <button id="SubmitButton" onClick={e => deleteSpot()}>Yes (delete spot)</button>
                    <button id="DeclineButton" onClick={closeModal}>No (keep spot)</button>
                </div>
            </div>
        </>
    )
}

export default DeleteSpotModal
