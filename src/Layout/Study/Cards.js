import React, { useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import Card from "./Card";
function Cards({ cards = [] }) {
  const [cardIndex, setCardIndex] = useState(0);
  const { deckId } = useParams();

  if (cards.length < 3) {
    return (
      <React.Fragment>
        <h2>Not enough cards</h2>
        <p>
          You need at least 3 cards to study. There are {cards.length}
          cards in this deck.
        </p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
          Add Cards
        </Link>
      </React.Fragment>
    );
  }
  if (cards.length === cardIndex) {
    if (
      window.confirm(
        "Restart cards?\n\nClick 'cancel' to return to the home page."
      )
    ) {
      setCardIndex(0);
    } else {
      <Redirect to="/" />;
    }
  }
  return (
    <Card
      cardIndex={cardIndex}
      setCardIndex={setCardIndex}
      card={cards[cardIndex]}
      length={cards.length}
    />
  );
}

export default Cards;
