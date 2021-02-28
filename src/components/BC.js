import CardList from "./CardList";

function BC({ cards }) {
  return (
    <>
      <div className="bc-container">
        <div className="bc">
          <span>Dashboard {">"} My Apps</span>
          <p>My apps</p>
        </div>
        <CardList cards={cards} />
      </div>
    </>
  );
}

export default BC;
