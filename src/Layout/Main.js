import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import { Link } from "react-router-dom";
import Deck from "./Deck";

function Main() {
  const [decksArray, setDecksArray] = useState([]);
  useEffect(() => {
    listDecks().then((results) => {
      setDecksArray(results);
    });
  }, []);

  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary" role="button">
        Create Deck
      </Link>
      <Deck decksArray={decksArray} setDecksArray={setDecksArray} />
    </div>
  );
}

export default Main;
