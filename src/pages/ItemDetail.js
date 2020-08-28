import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services";

export const ItemDetail = () => {
  let { id } = useParams();

  const [movie, setMovie] = useState({});
  useEffect(() => {
    let isMounted = true;
    getMovieDetails(id).then((data) => (isMounted ? setMovie(data) : null));

    return () => {
      isMounted = false;
    };
  }, [id]);

  return <div>Item {movie.title} Page</div>;
};
