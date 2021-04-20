import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteDeck, readDeck } from "../../utils/api/index";
import Nav from "./Nav";
import Card from "./Card";

function View() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  const handleDelete = (id) => {
    if (
      window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(id).then(() => {
        history.push("/");
      });
    }
  };
  const { cards = [] } = deck;
  return (
    <React.Fragment>
      <Nav id={deckId} name={deck.name} />
      <h1>{deck.name}</h1>
      <p>{deck.description}</p>
      <div className="justify-content-start">
        <Link
          to={`/decks/${deck.id}/edit`}
          className="btn btn-secondary m-2"
          role="button"
        >
          Edit
        </Link>
        <Link
          to={`/decks/${deck.id}/study`}
          className="btn btn-primary m-2 "
          role="button"
        >
          Study
        </Link>
        <Link
          to={`/decks/${deck.id}/cards/new`}
          className="btn btn-primary m-2"
          role="button"
        >
          Add Cards
        </Link>
        <Link
          to=""
          className="btn btn-danger m-2"
          role="button"
          onClick={() => handleDelete(deck.id)}
        >
          Delete
        </Link>
      </div>
      <h2>Cards</h2>
      {cards.map((card, index) => (
        <div key={index}>
          <Card card={card} />
        </div>
      ))}
    </React.Fragment>
  );
}

export default View;
