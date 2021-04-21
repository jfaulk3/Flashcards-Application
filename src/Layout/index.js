import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "./ListDecks";
import Study from "./Study";
import View from "./Deck/View";
import NewDeck from "./NewDeck";
import EditDeck from "./EditDeck";
import AddCard from "./Deck/AddCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path="/">
            <ListDecks />
          </Route>
          <Route path="/decks/new">
            <NewDeck />
          </Route>
          <Route exact={true} path="/decks/:deckId">
            <View />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards">
            <AddCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
