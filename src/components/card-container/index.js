import React, { useState } from "react";
import styled from "styled-components";
import { Card } from "../card";
import { getTrendingMovies } from "../../services";

export const CardContainer = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const [movies, setMovies] = useState([]);
  getTrendingMovies().then(({ results }) => setMovies(results));

  return (
    <Wrapper>
      {movies.slice(0, 15).map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;
