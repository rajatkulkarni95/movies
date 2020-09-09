import { Route, Switch } from "react-router-dom";
import React, { useEffect } from "react";
import { Browse } from "../pages/BrowsePage";
import { ErrorPage } from "../pages/ErrorPage";
import { ItemDetail } from "../pages/DetailPage";
import { FavouritePage } from "../pages/FavouritePage";
import { useFavourites } from "../hooks/useFavourites";

export const Routes = () => {
  const { getFavourites } = useFavourites();

  useEffect(() => {
    getFavourites();
    // eslint-disable-next-line
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Browse />
      </Route>
      <Route exact path="/favourites">
        <FavouritePage />
      </Route>
      <Route exact path="/movie/:id">
        <ItemDetail />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
