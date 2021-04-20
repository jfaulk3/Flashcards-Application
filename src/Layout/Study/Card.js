import React, { useState } from "react";

function Card({ cardIndex, setCardIndex, card, length }) {
  const [hasClicked, setHasClicked] = useState(false);
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Card {cardIndex + 1} of {length}
        </h5>
        <p className="card-text">{flipped ? card.back : card.front}</p>
        <div className="row">
          <button
            className="btn btn-secondary px-3 m-2"
            onClick={() => {
              setFlipped(!flipped);
              setHasClicked(true);
            }}
          >
            Flip
          </button>
          {hasClicked ? (
            <button
              onClick={() => {
                setCardIndex(cardIndex + 1);
                setFlipped(false);
                setHasClicked(false);
              }}
              className="btn btn-success  px-3 m-2"
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Card;
