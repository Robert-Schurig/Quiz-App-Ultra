import "./App.css";
import Header from "./components/header/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import cardData from "./components/card/CardData";
import Bookmark from "./components/bookmark/Bookmark";
import Profile from "./components/profile/Profile";
import CreateCard from "./components/createcard/CreateCard";
import Home from "./components/home/Home";

function App() {
  const [cards, setCards] = useState(cardData);
  const [currentPage, setCurrentPage] = useState("home");

  const pageComponent =
    currentPage === "home" ? (
      <Home />
    ) : currentPage === "bookmark" ? (
      <Bookmark />
    ) : currentPage === "createcard" ? (
      <CreateCard />
    ) : currentPage === "profile" ? (
      <Profile />
    ) : (
      <h2>Seite nicht gefunden.</h2>
    );

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
          return { ...card, bookmarked: !card.bookmarked };
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
        <Bookmark currentPage={currentPage} />
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              currentPage={currentPage}
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

      <Navigation
        currentPage={currentPage}
        onNavChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
}

export default App;
