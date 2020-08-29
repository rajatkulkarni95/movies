import { useStore, useDispatch } from "../context";

export const useFavourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useStore();

  const getFavourites = () => {
    let tempFavourites =
      JSON.parse(localStorage.getItem("movie_favorites")) || [];
    dispatch({ type: "FAVOURITES", payload: tempFavourites });
  };

  const setFavourites = (id) => {
    let tempFavourites = favourites;

    if (tempFavourites.indexOf(id) === -1) {
      tempFavourites.push(id);
      localStorage.setItem("movie_favorites", JSON.stringify(tempFavourites));
      dispatch({ type: "FAVOURITES", payload: tempFavourites });
    } else {
      const index = tempFavourites.indexOf(id);
      tempFavourites.splice(index, 1);
      dispatch({ type: "FAVOURITES", payload: tempFavourites });
      localStorage.setItem("movie_favorites", JSON.stringify(tempFavourites));
    }
  };

  return { getFavourites, setFavourites };
};
