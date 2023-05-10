import { useEffect, useState } from "react";
import './RatingStars.css'


const RatingStars = ()=>{
    const [rating, setRating] = useState(0)
    const [disabled, setDisabled] = useState(false)
    // console.log(rating)

    return(
        <>
            {/* <input
                type = "number"
                value = {rating}
                // onChange
            /> */}
            <ul className="Stars">
                <div className={rating >=1 ? 'filled': 'empty'}>
                    <i className="fa-solid fa-star"
                    onMouseEnter={e=>setRating(1)}
                    // onMouseLeave={e=>setRating(0)}
                    onClick={e=>setRating(1)}
                    // disabled={disabled}
                    ></i>
                </div>
                <div className={rating >=2 ? 'filled': 'empty'}>
                    <i className="fa-solid fa-star"
                    onMouseEnter={e=>setRating(2)}
                    onClick={e=>setRating(2)}
                    // onMouseLeave={e=>setRating(0)}
                    disabled={disabled}
                    ></i>
                </div>
                <div className={rating >=3 ? 'filled': 'empty'}>
                    <i className="fa-solid fa-star"
                    onMouseEnter={e=>setRating(3)}
                    onClick={e=>setRating(3)}
                    // onMouseLeave={e=>setRating(0)}
                    ></i>
                </div>
                <div className={rating >=4 ? 'filled': 'empty'}>
                    <i className="fa-solid fa-star"
                    onMouseEnter={e=>setRating(4)}
                    // onMouseLeave={e=>setRating(0)}
                    onClick={e=>setRating(4)}
                    ></i>
                </div>
                <div className={rating >=5 ? 'filled': 'empty'}>
                    <i className="fa-solid fa-star"
                    onMouseEnter={e=>setRating(5)}
                    onClick={e=>setRating(5)}
                    // onMouseLeave={e=>setRating(0)}
                    ></i>
                </div>
            </ul>
        </>
    )
}

export default RatingStars
