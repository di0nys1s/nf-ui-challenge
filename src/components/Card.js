import profileImage from "../assets/images/image-placement.svg";
import RateCard from "./RateCard";

function Card({ card }) {
  return (
    <div className="card">
      <div className="card-image-container">
        <span
          style={{ backgroundColor: card.published ? "#50BD9C" : "#E25169" }}>
          {card.published ? "Published" : "Unpublished"}
        </span>
        <br />
        <img className="card-image" src={profileImage} alt="ProfileImage" />
      </div>
      <div className="container">
        <h4 className="container-el">{card.title}</h4>
        <p className="container-el">by {card.user}</p>
        <RateCard card={card} rating={card.rating} cardId={card.id} />
      </div>
    </div>
  );
}

export default Card;
