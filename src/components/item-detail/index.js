import React from "react";
import styled from "styled-components";
import { MetaData } from "./Meta";
import { Info } from "./Info";

export const ItemDetailCard = ({
  title,
  overview,
  vote_average,
  poster_path,
  genres,
  cast,
  crew,
}) => {
  return (
    <Wrapper>
      <MetaData title={title} vote_average={vote_average} genres={genres} />
      <Info
        overview={overview}
        title={title}
        poster_path={poster_path}
        cast={cast}
        crew={crew}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
