import { useState } from "react";
import emptyStar from "../assets/images/single-star-grey.svg";
import goldStar from "../assets/images/single-star-gold.svg";
import {
  updateAverageRating,
  getRatingValueFromImg,
} from "../HelperFunctions/RatingFunctions";

function RateCard({ card }) {
  const [cardVal, setCardVal] = useState(card);
  const [ratingCurr, setRatingCurr] = useState(card.rating);

  const handleClick = async (e) => {
    const ratingVal = getRatingValueFromImg(e);
    const rateCount = card.rateCount ? card.rateCount : 0;

    card.rating = updateAverageRating(card.rating, ratingVal, rateCount);
    setRatingCurr(card.rating);

    card.rateCount = rateCount + 1;
    setCardVal(card);
    await fetch(`${process.env.REACT_APP_DATA_API}/cards/${card.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(cardVal),
    });
  };

  return (
    <div className="rating-container">
      <img
        onClick={handleClick}
        src={ratingCurr >= 1 ? goldStar : emptyStar}
        alt="star1"
        title="image1"
      />
      <img
        onClick={handleClick}
        src={ratingCurr >= 2 ? goldStar : emptyStar}
        alt="star2"
      />
      <img
        onClick={handleClick}
        src={ratingCurr >= 3 ? goldStar : emptyStar}
        alt="star3"
      />
      <img
        onClick={handleClick}
        src={ratingCurr >= 4 ? goldStar : emptyStar}
        alt="star4"
      />
      <img
        onClick={handleClick}
        src={ratingCurr === 5 ? goldStar : emptyStar}
        alt="star5"
      />
      <p className="rating-average">{ratingCurr}</p>
    </div>
  );
}

export default RateCard;
