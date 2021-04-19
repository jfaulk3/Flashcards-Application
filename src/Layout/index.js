import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Main from "./Main";
import Study from "./Study";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route exact={true} path="/decks/:deckId/study">
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
