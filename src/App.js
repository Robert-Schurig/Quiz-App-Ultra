import "./App.css";
import Header from "./components/header/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";
import cardData from "./components/card/CardData";

function App() {
  const [cards, setCards] = useState(cardData);
  const [buttonText, setButtonText] = useState(cardData);
  const [show, setShow] = useState(false);

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

  // const handleAnswerToggle = (id) => {
  //   setCards(
  //     cards.map((card) => {
  //       if (id === card.id) {
  //         return { ...card, bookmarked: !card.bookmarked };
  //       } else {
  //         return card;
  //       }
  //     })
  //   );
  // };
  // setToggle(!toggle);
  // setButtonText(toggle ? "Show Answer" : "Hide Answer");

  return (
    <div className="App">
      <Header />
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            card={card}
            onBookmarkToggle={(id) => {
              handleBookmarkToggle(id);
            }}
            setShow={setShow}
          />
        );
      })}

      <Navigation />
    </div>
  );
}

export default App;
