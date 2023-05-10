import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal, closeModal } from "../../context/Modal";
// import { addReviewThunk } from "../../store/reviewReducer";
import CurrentSpots from "../CurrentSpots";
// import './DeleteSpotModal.css'
import { useHistory } from "react-router-dom";
import "./RatingStars.css";

const ReviewFormModal = ({spot}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {closeModal} = useModal()

    const [reviewText,setReviewText] = useState('')
    const [rating, setRating] = useState(0)

    // console.log(reviewText)

    const postReview = () => {

        const newReview = {
            review: reviewText,
            rating
        }

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
                <ul className="Stars">
                    <div className={rating >=1 ? 'filled': 'empty'}>
                        <i className="fa-solid fa-star"
                        onMouseEnter={e=>setRating(1)}
                        onClick={e=>setRating(1)}
                        ></i>
                    </div>
                    <div className={rating >=2 ? 'filled': 'empty'}>
                        <i className="fa-solid fa-star"
                        onMouseEnter={e=>setRating(2)}
                        onClick={e=>setRating(2)}
                        ></i>
                    </div>
                    <div className={rating >=3 ? 'filled': 'empty'}>
                        <i className="fa-solid fa-star"
                        onMouseEnter={e=>setRating(3)}
                        onClick={e=>setRating(3)}
                        ></i>
                    </div>
                    <div className={rating >=4 ? 'filled': 'empty'}>
                        <i className="fa-solid fa-star"
                        onMouseEnter={e=>setRating(4)}
                        onClick={e=>setRating(4)}
                        ></i>
                    </div>
                    <div className={rating >=5 ? 'filled': 'empty'}>
                        <i className="fa-solid fa-star"
                        onMouseEnter={e=>setRating(5)}
                        onClick={e=>setRating(5)}
                        ></i>
                    </div>
                </ul>
                <div className="DeleteButtons">
                    <button id="" onClick={e => postReview()}>Submit your Review</button>
                </div>
            </div>
        </>
    )
}

export default ReviewFormModal
