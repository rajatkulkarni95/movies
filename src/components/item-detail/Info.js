import React from "react";
import styled from "styled-components";
import { MoviePoster } from "./Image";
import { Cast } from "./Cast";

export const Info = ({ overview, title, poster_path, cast, crew }) => (
  <Wrapper>
    <MoviePoster title={title} poster_path={poster_path} />
    <MovieDetail>
      <Heading>About the Movie</Heading>
      <Plot>{overview}</Plot>
      <Cast cast={cast} crew={crew} />
    </MovieDetail>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;

  @media (max-width: ${(p) => p.theme.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontWeights.md.size};
    font-weight: ${theme.fontWeights.lg.weight};
    color: ${theme.colors.white};
    margin: 10px 0;
`}
  @media (max-width: ${(p) => p.theme.mobile}) {
    padding: 5px 15px;
  }
`;

const Plot = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontWeights.xs.size};
    font-weight: ${theme.fontWeights.xs.weight};
    color: ${theme.colors.darkWhite};
    line-height: 1.5;
    word-wrap: wrap;
`}
  @media (max-width: ${(p) => p.theme.mobile}) {
    padding: 0 15px;
  }
`;
