import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services";
import { ItemDetailCard } from "../components/item-detail";
import { useFavourites } from "../hooks/useFavourites";

export const ItemDetail = () => {
  let { id } = useParams();
  const { getFavourites } = useFavourites();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    let isMounted = true;
    getMovieDetails(id).then((data) => (isMounted ? setMovie(data) : null));
    getFavourites();
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <Wrapper>
      <ItemDetailCard {...movie} movieID={id} />
      <Image
        src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
        alt="Movie"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  margin-left: 100px;
`;
