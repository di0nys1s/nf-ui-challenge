import { useState } from "react";
import emptyStar from "../assets/images/single-star-grey.svg";
import goldStar from "../assets/images/single-star-gold.svg";

function RateCard({ card }) {
  const [ratingVal, setRatingVal] = useState(card.rating);
  const [cardVal, setCardVal] = useState(card);
  const [ratingCount, setRatingCount] = useState(card.rateCount);

  const handleClick = async (e) => {
    const ratingVal = parseFloat(e.target.alt.split("").pop());

    const rateCount = ratingCount ? ratingCount : 0;

    const updatedAvgRating =
      (rateCount * card.rating + ratingVal) / (rateCount + 1);
    card.rating =
      parseFloat(updatedAvgRating.toFixed(1)) > 4.9
        ? 5
        : parseFloat(updatedAvgRating.toFixed(1));

    setRatingVal(card.rating);
    setRatingCount(rateCount + 1);
    
    card.rateCount = rateCount + 1;
    setCardVal(card);

    await fetch(`http://localhost:5000/cards/${card.id}`, {
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
        src={ratingVal >= 1 ? goldStar : emptyStar}
        alt="star1"
      />
      <img
        onClick={handleClick}
        src={ratingVal >= 2 ? goldStar : emptyStar}
        alt="star2"
      />
      <img
        onClick={handleClick}
        src={ratingVal >= 3 ? goldStar : emptyStar}
        alt="star3"
      />
      <img
        onClick={handleClick}
        src={ratingVal >= 4 ? goldStar : emptyStar}
        alt="star4"
      />
      <img
        onClick={handleClick}
        src={ratingVal === 5 ? goldStar : emptyStar}
        alt="star5"
      />
      <p className="rating-average">{ratingVal}</p>
    </div>
  );
}

export default RateCard;
