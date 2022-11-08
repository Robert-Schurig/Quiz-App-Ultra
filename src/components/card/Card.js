import "./Card.css";
import cardData from "./CardData";

export default function Card({ card, onBookmarkToggle, show, setShow }) {
  const handleBookmarkToggle = () => {
    onBookmarkToggle(card.id);
  };

  return (
    <div>
<<<<<<< Updated upstream
      <img
        src={
          card.bookmarked
            ? "./icons/bookmark.png"
            : "./icons/save-instagram.png"
        }
        alt="Bookmark this question"
        className="bookmark"
        onClick={handleBookmarkToggle}
      />
      <>
        <p>{card.question}</p>

        <button onClick={() => setShow(true)}>Show Answer</button>
        <button onClick={() => setShow(false)}>Hide Answer</button>

        {show ? <p>{card.answer}</p> : null}
      </>
      <button className="Categories">#HTML </button>
      <button className="Categories">#Flexbox</button>
      <button className="Categories">#CSS</button>
=======
      <section>
        <img
          src={
            card.bookmarked
              ? "./icons/bookmark.png"
              : "./icons/save-instagram.png"
          }
          alt="Bookmark this question"
          className="bookmark"
          onClick={handleBookmarkToggle}
        />
        <>
          <p>{card.question}</p>
          <button onClick={handleAnswerToggle}>Show Answer</button>
          <p>{card.answervisible ? card.answer : card.answerhidden}</p>
        </>
        <button className="Categories">#HTML </button>
        <button className="Categories">#Flexbox</button>
        <button className="Categories">#CSS</button>
      </section>
>>>>>>> Stashed changes
    </div>
  );
}
