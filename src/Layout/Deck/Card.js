import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function Card({ card }) {
  const { url } = useRouteMatch();
  const handleDelete = (id) => {
    if (
      window.confirm("Delete this card?\n\nYou will not be able to recover it.")
    ) {
      deleteCard(id);
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <p className="card-text col-6">{card.front}</p>
          <p className="card-text col-6">{card.back}</p>
        </div>
        <Link
          to={`${url}/cards/${card.id}/edit`}
          className="btn btn-primary m-2"
          role="button"
        >
          Edit Card
        </Link>
        <Link
          to=""
          className="btn btn-danger m-2"
          role="button"
          onClick={() => handleDelete(card.id)}
        >
          Delete
        </Link>
      </div>
    </div>
  );
}

export default Card;
