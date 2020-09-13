import React from "react";
import styled from "styled-components";
import { Card } from "../card";
import { useStore } from "../../context";

export const FavouriteContainer = () => {
  const { favourites } = useStore();

  return (
    <Wrapper>
      {favourites.length ? (
        favourites.map((movie) => <Card key={movie.id} {...movie} />)
      ) : (
        <div>No Favourites</div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 30px;
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
    padding: 0 10px;
  }
`;
