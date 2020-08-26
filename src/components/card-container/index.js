import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../card";
import { getTrendingMovies } from "../../services";
import { useStore, useDispatch } from "../../context";

export const CardContainer = () => {
  const { trending, searchFiltered, searchText } = useStore();
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    getTrendingMovies().then(({ results }) =>
      isMounted ? dispatch({ type: "TRENDING", payload: results }) : null
    );
    return () => {
      isMounted = false;
    };
  }, [trending]);

  return (
    <Wrapper>
      {searchFiltered.length && searchText
        ? searchFiltered.map((movie) => <Card key={movie.id} {...movie} />)
        : trending
            .slice(0, 15)
            .map((movie) => <Card key={movie.id} {...movie} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;
