import React from "react";
import styled from "styled-components";

export const MoviePoster = ({ poster_path, title }) => {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
      alt={title}
    />
  );
};

const Image = styled.img`
  display: block;
  max-width: 300px;
  max-height: 400px;
  width: auto;
  height: auto;
  padding-right: 40px;

  @media (max-width: ${(p) => p.theme.mobile}) {
    width: calc(${(p) => p.theme.mobile} * 0.7);
    height: 400px;
    padding-right: 0px;
  }
`;
