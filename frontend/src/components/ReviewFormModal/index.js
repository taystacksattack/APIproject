import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal, closeModal } from "../../context/Modal";
// import { addReviewThunk } from "../../store/reviewReducer";
import CurrentSpots from "../CurrentSpots";
// import './DeleteSpotModal.css'
import { useHistory } from "react-router-dom";

const ReviewFormModal = ({spot}) => {
    // console.log(spot)
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} = useModal()

    const [reviewText,setReviewText] = useState('')
    const [stars,setStars] = useState(0)


    const postReview = () => {
        history.push(`/spots/${spot.id}`)
        // dispatch(addReviewThunk(review))
            .then(closeModal)

    }

    return(
        <>
            <div id="DeleteModal">
                <h2>How was your stay?</h2>
                {/* {if errors...} */}
                <textarea
                    type="text"
                    value={reviewText}
                    onChange={e=>{setReviewText(e.target.value)}}
                >
                </textarea>
                <div className="DeleteButtons">
                    <button id="" onClick={e => postReview()}>Submit your Review</button>
                </div>
            </div>
        </>
    )
}

export default ReviewFormModal
