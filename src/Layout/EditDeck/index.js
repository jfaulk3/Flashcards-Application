import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Edit from "./Edit";
import Nav from "./Nav";

function EditDeck() {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const getDeck = async () => {
      try {
        const data = await readDeck(deckId, abortController.signal);
        setDeck(data);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw error;
        }
      }
    };

    getDeck();

    return () => abortController.abort();
  }, [deckId]);

  if (deck) {
    return (
      <React.Fragment>
        <Nav name={deck.name} />
        <Edit deckName={deck.name} deckInfo={deck.description} deck={deck} />
      </React.Fragment>
    );
  }
  return null;
}

export default EditDeck;
