import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../card";
import { getTrendingMovies } from "../../services";

export const CardContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTrendingMovies().then(({ results }) =>
      isMounted ? setMovies(results) : null
    );
    console.log("useeffect ran");
    return () => {
      isMounted = false;
    };
  }, []);

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
