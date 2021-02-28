import {
  updateAverageRating,
  getRatingValueFromImg,
} from "./HelperFunctions/RatingFunctions";

it("check average rating", () => {
  expect(updateAverageRating(4, 5, 2)).toBe(4.3);
  expect(updateAverageRating(4, 5, 2)).not.toBe(null);
  expect(updateAverageRating(2.5, 3, 4)).toBe(2.6);
  expect(updateAverageRating(2.5, 3, 4)).not.toBe("2.6");
});

it("check the correct rating value", () => {
  let e1 = {
    target: {
      alt: "star1",
    },
  };

  let e2 = {
    target: {
      alt: "star5",
    },
  };

  expect(getRatingValueFromImg(e1)).toBe(1);
  expect(getRatingValueFromImg(e2)).not.toBe("5");
  expect(getRatingValueFromImg(e2)).not.toBe(null);
});
