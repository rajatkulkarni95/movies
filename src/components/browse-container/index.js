import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../card";
import { getTrendingMovies, getGenres } from "../../services";
import { useStore, useDispatch } from "../../context";

export const BrowseContainer = () => {
  const { trending, searchFiltered, searchText, genres } = useStore();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);

  useEffect(() => {
    getGenres().then(({ genres }) =>
      dispatch({ type: "GENRES", payload: genres })
    );
  }, []);

  useEffect(() => {
    let isMounted = true;
    getTrendingMovies(page).then(({ results }) =>
      isMounted ? dispatch({ type: "TRENDING", payload: results }) : null
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
          : trending
              .slice(0, 15)
              .map((movie) => (
                <Card key={movie.id} {...movie} genres={genres} />
              ))}
      </Wrapper>
      <Button onClick={() => setPage(page + 1)}>Load More</Button>
    </Stuff>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: auto auto auto auto;
`;

const Stuff = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 10px;
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
