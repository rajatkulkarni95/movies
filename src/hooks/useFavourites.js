import { useStore, useDispatch } from "../context";

export const useFavourites = () => {
  const dispatch = useDispatch();
  const { favourites } = useStore();

  const getFavourites = () => {
    let tempFavourites =
      JSON.parse(localStorage.getItem("movie_favorites")) || [];

    dispatch({ type: "FAVOURITES", payload: tempFavourites });
  };

  const setFavourites = (movie) => {
    let tempFavourites = favourites;

    if (!tempFavourites.some((fav) => fav.id === movie.id)) {
      tempFavourites.push(movie);
      localStorage.setItem("movie_favorites", JSON.stringify(tempFavourites));
      dispatch({ type: "FAVOURITES", payload: tempFavourites });
    } else {
      const filteredFavs = tempFavourites.filter((fav) => fav.id !== movie.id);

      dispatch({ type: "FAVOURITES", payload: filteredFavs });
      localStorage.setItem("movie_favorites", JSON.stringify(filteredFavs));
    }
  };

  return { getFavourites, setFavourites };
};
