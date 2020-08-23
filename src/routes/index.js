import { Route, Switch } from "react-router-dom";
import React from "react";
import { Discover } from "../pages/Discover";
import { Browse } from "../pages/Browse";
import { ErrorPage } from "../pages/ErrorPage";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Discover />
    </Route>
    <Route exact path="/browse">
      <Browse />
    </Route>
    <Route>
      <ErrorPage />
    </Route>
  </Switch>
);
