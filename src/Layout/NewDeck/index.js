import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import Nav from "./Nav";

function NewDeck() {
  const history = useHistory();
  const [name, setName] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const [info, setInfo] = useState("");
  const handleInfoChange = (event) => setInfo(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const deck = { name: name, description: info, cards: [] };
    createDeck(deck).then(({ id }) => {
      history.push(`/decks/${id}`);
    });
  };
  return (
    <React.Fragment>
      <Nav />
      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <label htmlFor="name">
            Name <br />
            <input
              id="name"
              name="name"
              onChange={handleNameChange}
              value={name}
              type="text"
              placeholder="Deck Name"
            />
          </label>
        </div>
        <div className="row">
          <label htmlFor="description">
            Description <br />
            <textarea
              id="description"
              name="discription"
              onChange={handleInfoChange}
              value={info}
              placeholder="Brief description of the deck"
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <Link to="/" className="btn">
          Cancel
        </Link>
      </form>
    </React.Fragment>
  );
}

export default NewDeck;
