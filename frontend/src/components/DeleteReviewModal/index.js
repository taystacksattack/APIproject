import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal, closeModal } from "../../context/Modal";
import { deleteReviewThunk, loadReviewsThunk } from "../../store/reviewReducer";
import CurrentSpots from "../CurrentSpots";
import { singleSpotThunk } from "../../store/spotReducer";
// import './DeleteSpotModal.css'
import { useHistory } from "react-router-dom";

const DeleteReviewModal = ({review}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} = useModal()

    console.log(review.id)
    const deleteReview = async (reviewId) => {
        dispatch(deleteReviewThunk(reviewId))
        dispatch(singleSpotThunk(review.spotId))
            // .then(loadReviewsThunk(review.id))
            .then(closeModal())
    }

    return(
        <>
            <div id="DeleteModal">
                <h2>Confirm Delete</h2>
                <h3>Are you sure you want to remove this spot from the listings? </h3>
                <div className="DeleteButtons">
                    <button id="SubmitButton" onClick={e => deleteReview(review.id)}>Yes (delete review)</button>
                    <button id="DeclineButton" onClick={closeModal}>No (keep review)</button>
                </div>
            </div>
        </>
    )
}

export default DeleteReviewModal
