import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Card } from "../card";
import { getTrendingMovies, getGenres } from "../../services";
import { useStore, useDispatch } from "../../context";

export const BrowseContainer = () => {
  const { trending, searchFiltered, searchText, genres } = useStore();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getGenres().then(({ genres }) =>
      dispatch({ type: "GENRES", payload: genres })
    );
  }, []);

  useEffect(() => {
    let isMounted = true;
    getTrendingMovies(page).then(({ results }) =>
      isMounted
        ? dispatch({ type: "TRENDING", payload: trending.concat(results) })
        : null
    );

    return () => {
      isMounted = false;
    };
  }, [page]);

  return (
    <Stuff>
      <Wrapper>
        {searchFiltered.length && searchText
          ? searchFiltered.map((movie) => (
              <Card key={movie.id} {...movie} genres={genres} />
            ))
          : trending.map((movie) => (
              <Card key={movie.id} {...movie} genres={genres} />
            ))}
        <Button onClick={() => setPage(page + 1)}>Load More</Button>
      </Wrapper>
    </Stuff>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: auto auto auto auto auto auto;
`;

const Stuff = styled.div`
  display: flex;
  flex-direction: column;
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
