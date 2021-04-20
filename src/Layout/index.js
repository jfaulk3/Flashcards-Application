import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import ListDecks from "./ListDecks";
import Study from "./Study";
import View from "./Deck/View";
import NewDeck from "./NewDeck";

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
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
