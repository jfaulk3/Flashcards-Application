import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../../utils/api";

function ViewDeck({ deck, setDeckList }) {
  const handleDelete = (id) => {
    if (
      window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(id).then(() => listDecks().then(setDeckList));
    }
  };

  if (deck) {
    const { id, name, description, cards = [] } = deck;
    return (
      <div className="card w-50">
        <div className="card-body container-fluid">
          <div className="row justify-space-between">
            <h5 className="col card-title">{name}</h5>
            <h6 className="col card-subtitle mb-2 text-muted">
              {cards.length} {cards.length === 1 ? "card" : "cards"}
            </h6>
          </div>
          <div className="row">
            <p className="card-text">{description}</p>
          </div>
          <div className="row">
            <Link
              to={`/decks/${id}`}
              className="btn btn-secondary"
              role="button"
            >
              View
            </Link>
            <Link
              to={`/decks/${id}/study`}
              className="btn btn-primary"
              role="button"
            >
              Study
            </Link>
            <Link
              to=""
              className="btn btn-danger"
              role="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default ViewDeck;
