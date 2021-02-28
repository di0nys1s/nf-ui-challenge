import "./App.scss";
import { useState, useEffect } from "react";
import toTop from "./assets/images/to-top.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BC from "./components/BC";
// import db from "./data/data.json";

function App() {
  const [cards, setCards] = useState([]);

  // Run 'npm run server' to run the json-server in another terminal
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch("http://localhost:5000/cards");
      const data = await response.json();

      setCards(data);
    };
    fetchCards();
  }, []);

  // const cardsData = db[0].data.cards;

  return (
    <div id="app">
      <Header />
      <main>
        <BC cards={cards} />
        <a href="#">
          <img
            className="to-top"
            src={toTop}
            alt="toTop"
          />
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default App;
