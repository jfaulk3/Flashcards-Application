import React, { useState } from "react";

function Cards({ cards }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!cards) return null;
  console.log(cards[cardIndex]);
  const { front, back } = cards[cardIndex];
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Card {cardIndex + 1} of {cards.length}
        </h5>
        <p className="card-text">{flipped ? back : front}</p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setFlipped(!flipped);
          }}
        >
          Flip
        </button>
        {flipped ? (
          <button className="btn btn-success">Next Card</button>
        ) : null}
      </div>
    </div>
  );
}

export default Cards;
