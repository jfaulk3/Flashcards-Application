import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { useParams, useHistory } from "react-router-dom";
import { createCard, readDeck } from "../../../utils/api";

function AddCard() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);
  const history = useHistory();
  const [front, setFront] = useState("");
  const handleFrontChange = (event) => setFront(event.target.value);
  const [back, setBack] = useState("");
  const handleBackChange = (event) => setBack(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const card = { front: front, back: back };
    createCard(deckId, card);
  };

  const handleDone = () => history.push(`/decks/${deckId}`);

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

  return (
    <React.Fragment>
      <Nav name={deck.name} />
      <h1>{deck.name}: Add Card</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="front">
            Front <br />
            <textarea
              id="front"
              name="front"
              onChange={handleFrontChange}
              value={front}
              placeholder="Front side of card"
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="back">
            Back <br />
            <textarea
              id="back"
              name="back"
              onChange={handleBackChange}
              value={back}
              placeholder="Back side of card"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button onClick={handleDone} className="btn btn-secondary">
          Done
        </button>
      </form>
    </React.Fragment>
  );
}

export default AddCard;
