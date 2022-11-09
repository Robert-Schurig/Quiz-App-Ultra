import "./App.css";
import Header from "./components/header/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import cardData from "./components/card/CardData";
import Home from "./components/home/Home";
import Bookmark from "./components/bookmark/Bookmark";
import CreateCard from "./components/createcard/CreateCard";
import Profile from "./components/profile/Profile";

function App() {
  const [cards, setCards] = useState(cardData);
  const [currentPage, setCurrentPage] = useState("Home");

  const handleBookmarkToggle = (id) => {
    setCards(
      cards.map((card) => {
        if (id === card.id) {
          return { ...card, bookmarked: !card.bookmarked };
        } else {
          return card;
        }
      })
    );
  };

  const handleAnswerToggle = (id) => {
    setCards(
      cards.map((card) => {
        if (id === card.id) {
          return { ...card, answervisible: !card.answervisible };
        } else {
          return card;
        }
      })
    );
  };

  return (
    <div className="App">
      <main className="app__main">
        <Header />
        <Home currentPage={currentPage} />
        <Bookmark currentPage={currentPage} />
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              onBookmarkToggle={(id) => {
                handleBookmarkToggle(id);
              }}
              onAnswerToggle={(id) => {
                handleAnswerToggle(id);
              }}
            />
          );
        })}
        <CreateCard currentPage={currentPage} />
        <Profile currentPage={currentPage} />
      </main>
      <footer>
        <Navigation
          currentPage={currentPage}
          onNavChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </footer>
    </div>
  );
}

export default App;
