import React from "react";
import { Link } from "react-router-dom";

function Deck({ decksArray }) {
  return (
    <div>
      {decksArray.map(({ id, name, description, cards }, index) => {
        return (
          <div className="card w-50 m-2" key={index}>
            <div className="card-body container">
              <div className="row justify-content-between align-items-center">
                <h5 className="card-title col-6">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {cards.length} cards
                </h6>
              </div>
              <p className="card-text">{description}</p>
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
                <Link to="" className="btn btn-danger" role="button">
                  Delete
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Deck;
