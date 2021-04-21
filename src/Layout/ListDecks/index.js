import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listDecks } from "../../utils/api";
import ViewDeck from "./ViewDeck";

function ListDeck() {
  const [deckList, setDeckList] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const getDecks = async () => {
      try {
        const data = await listDecks(abortController.signal);
        setDeckList(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    };

    getDecks();

    return () => abortController.abort();
  }, []);

  return (
    <React.Fragment>
      <Link to="/decks/new" className="btn btn-secondary">
        Create Deck
      </Link>
      {deckList.map((deck, index) => {
        return (
          <div key={index}>
            <ViewDeck deck={deck} setDeckList={setDeckList} />
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default ListDeck;
