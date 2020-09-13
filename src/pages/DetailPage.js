import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getMovieDetails, getCastDetails } from "../services";
import { ItemDetailCard } from "../components/item-detail";

export const ItemDetail = () => {
  let { id } = useParams();

  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});

  useEffect(() => {
    getMovieDetails(id).then((data) => setMovie(data));
    getCastDetails(id).then((data) => setCredits(data));
  }, [id]);

  return (
    <Wrapper>
      <ItemDetailCard {...movie} movieID={id} {...credits} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
