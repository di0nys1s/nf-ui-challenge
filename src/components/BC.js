import CardList from "./CardList";
import toTop from "../assets/images/to-top.svg";

function BC({ cards }) {
  return (
    <>
      <div className="bc-container">
        <div className="bc">
          <span>Dashboard {">"} My Apps</span>
          <p>My apps</p>
        </div>
        <CardList cards={cards} />
        <a href="#">
          <img className="to-top" src={toTop} alt="toTop" />
        </a>
      </div>
    </>
  );
}

export default BC;
