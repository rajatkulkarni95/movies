import React from "react";
import styled from "styled-components";
import { MetaData } from "./Meta";
import { FavoriteButton } from "./Favourite";
import { Info } from "./Info";
import { IMDB } from "./IMDb-Button";

export const ItemDetailCard = ({
  title,
  runtime,
  overview,
  movieID,
  imdb_id,
  vote_average,
}) => {
  console.log(movieID);
  return (
    <Wrapper>
      <MetaData runtime={runtime} />
      <Title>{title}</Title>
      <ButtonContainer>
        <IMDB id={imdb_id} rating={vote_average} />
        <FavoriteButton movieID={movieID} />
      </ButtonContainer>
      <Info overview={overview} />
      <div>
        <div>
          <p>Actors</p>
          <ul>
            <li>Matt Damon</li>
            <li>Matt Damon</li>
            <li>Matt Damon</li>
            <li>Matt Damon</li>
          </ul>
        </div>
        <div>
          <div>
            <p>Genres</p>
            <ul>
              <li>Horror</li>
              <li>Horror</li>
              <li>Horror</li>
            </ul>
          </div>
          <div>
            <p>Director</p>
            <p>Christopher Nolan</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${({ theme }) => `
        font-size: ${theme.fontWeights.lg.size};
        font-weight: ${theme.fontWeights.lg.weight};
        word-wrap: break-word;
    `}
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;
