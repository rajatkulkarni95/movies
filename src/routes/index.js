import { Route, Switch } from "react-router-dom";
import React from "react";
import { Discover } from "../pages/Discover";
import { Browse } from "../pages/Browse";
import { ErrorPage } from "../pages/ErrorPage";
import { ItemDetail } from "../pages/ItemDetail";

export const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Browse />
    </Route>
    <Route exact path="/movie/:id">
      <ItemDetail />
    </Route>
    <Route>
      <ErrorPage />
    </Route>
  </Switch>
);
