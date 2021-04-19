import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import Nav from "./Nav";
import Cards from "./Cards";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  return (
    <div>
      <Nav id={deck.id} name={deck.name} />
      <h1>Study: {deck.name}</h1>
      <Cards cards={deck.cards} />
    </div>
  );
}

export default Study;
