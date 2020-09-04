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
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: auto auto auto auto auto auto;
`;
