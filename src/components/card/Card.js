import "./Card.css";
import cardData from "./CardData";
import CreateCard from "../createcard/CreateCard";

export default function Card({ card, onBookmarkToggle, onAnswerToggle }) {
  const handleBookmarkToggle = () => {
    onBookmarkToggle(card.id);
  };

  const handleAnswerToggle = () => {
    onAnswerToggle(card.id);
  };

  return (
    <div>
      <section>
        <img
          src={
            card.bookmarked
              ? "./icons/bookmark.png"
              : "./icons/save-instagram.png"
          }
          alt="Bookmark this question"
          className="bookmark"
          onClick={onBookmarkToggle}
        />
        <>
          <p>{card.question}</p>
          <button onClick={onAnswerToggle}>Show Answer</button>
          <p>{card.answervisible ? card.answer : card.answerhidden}</p>
        </>
        <button className="Categories">#HTML </button>
        <button className="Categories">#Flexbox</button>
        <button className="Categories">#CSS</button>
      </section>
    </div>
  );
}
