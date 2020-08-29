import React from "react";
import styled from "styled-components";
import { MetaData } from "./Meta";
import { FavoriteButton } from "./Favourite";
import { Info } from "./Info";

export const ItemDetailCard = ({ title, runtime, overview, movieID }) => {
  console.log(movieID);
  return (
    <Wrapper>
      <MetaData runtime={runtime} />
      <Title>{title}</Title>
      <div>
        <span className="btn">IMDb</span>
        <FavoriteButton movieID={movieID} />
      </div>
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
