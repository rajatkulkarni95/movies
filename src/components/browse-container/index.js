import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../card";
import { getTrendingMovies } from "../../services";
import { useStore, useDispatch } from "../../context";

export const BrowseContainer = () => {
  const { trending, searchFiltered, searchText } = useStore();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getTrendingMovies(page).then(({ results }) =>
      dispatch({ type: "TRENDING", payload: trending.concat(results) })
    );
    // eslint-disable-next-line
  }, [page]);

  return (
    <Wrapper>
      {searchFiltered.length && searchText
        ? searchFiltered.map((movie) => <Card key={movie.id} {...movie} />)
        : trending.map((movie) => <Card key={movie.id} {...movie} />)}
      <Button onClick={() => setPage(page + 1)}>Load More</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px 10px;
  grid-template-columns: repeat(6, auto);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, auto);
  }

  @media (max-width: ${(p) => p.theme.tablet}) {
    grid-template-columns: repeat(3, auto);
  }

  @media (max-width: ${(p) => p.theme.mobile}) {
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px 10px;
  }
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.yellow};
  color: ${(p) => p.theme.colors.dark};
  font-family: ${(p) => p.theme.font};
  cursor: pointer;

  :hover {
    background: ${(p) => p.theme.colors.grey};
    color: ${(p) => p.theme.colors.white};
  }
`;
