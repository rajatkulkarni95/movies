import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getMovieDetails, getCastDetails } from "../services";
import { ItemDetailCard } from "../components/item-detail";
import { useFavourites } from "../hooks/useFavourites";

export const ItemDetail = () => {
  let { id } = useParams();

  const { getFavourites } = useFavourites();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});

  useEffect(() => {
    getMovieDetails(id).then((data) => setMovie(data));
    getCastDetails(id).then((data) => setCredits(data));

    getFavourites();
  }, [id]);

  return <ItemDetailCard {...movie} movieID={id} {...credits} />;
};
