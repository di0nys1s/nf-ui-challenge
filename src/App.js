import "./App.scss";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BC from "./components/BC";

function App() {
  const [cards, setCards] = useState([]);

  // Run 'npm run server' to run the json-server in another terminal
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch(`${process.env.REACT_APP_DATA_API}/cards`);
      const data = await response.json();

      setCards(data);
    };
    fetchCards();
  }, []);

  return (
    <div id="app">
      <Header />
      <main>
        <BC cards={cards} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
