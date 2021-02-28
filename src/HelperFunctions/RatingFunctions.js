const updateAverageRating = (cardRating, ratingVal, rateCount) => {
  const updatedAvgRating =
    (rateCount * cardRating + ratingVal) / (rateCount + 1);
  cardRating =
    parseFloat(updatedAvgRating.toFixed(1)) > 4.9
      ? 5
      : parseFloat(updatedAvgRating.toFixed(1));

  return cardRating;
};

const getRatingValueFromImg = (e) => {
  const ratingVal = parseFloat(e.target.alt.split("").pop());

  return ratingVal;
};

module.exports = { updateAverageRating, getRatingValueFromImg };
