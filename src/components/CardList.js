import Card from "./Card";

function CardList({ cards }) {
  return (
    <div className="card-list-container">
      {cards.length > 0
        ? cards.map((card) => (
            <Card
              key={card.id}
              card={card}
            />
          ))
        : "There is no card to show!"}
    </div>
  );
}

export default CardList;
