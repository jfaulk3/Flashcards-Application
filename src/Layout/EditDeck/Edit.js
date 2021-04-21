import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { updateDeck } from "../../utils/api";

function Edit({ deckName = "", deckInfo = "", deck = {} }) {
  const history = useHistory();
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const handleInfoChange = (event) => setInfo(event.target.value);

  useEffect(() => {
    setName(deckName);
    setInfo(deckInfo);
  }, [deckName, deckInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const NewDeck = { ...deck, name: name, description: info };
    updateDeck(NewDeck).then(({ id }) => {
      history.push(`/decks/${id}`);
    });
  };

  return (
    <React.Fragment>
      <h1>Edit Deck</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name <br />
            <input
              id="name"
              name="name"
              onChange={handleNameChange}
              value={name}
              type="text"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description <br />
            <textarea
              id="description"
              name="discription"
              className="w-100"
              onChange={handleInfoChange}
              value={info}
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

export default Edit;
