import React from "react";
import styled from "styled-components";
import { FavouriteButton } from "./Favourite";

export const MetaData = ({
  title,
  vote_average,
  genres,
  movieID,
  poster_path,
}) => {
  return (
    <Meta>
      <Head>
        <Title>{title}</Title>
        <Genre>
          {genres &&
            genres
              .slice(0, 2)
              .reduce((acc, genre) => `${acc}  ${genre.name} `, "")}
        </Genre>
      </Head>
      <Right>
        <Score>
          <AverageScore>{vote_average}</AverageScore>/10
        </Score>
        <FavouriteButton
          movieID={movieID}
          poster_path={poster_path}
          title={title}
        />
      </Right>
    </Meta>
  );
};

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${(p) => p.theme.mobile}) {
    padding: 0 15px;
  }
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  ${({ theme }) => `
        font-size: ${theme.fontWeights.lg.size};
        font-weight: ${theme.fontWeights.lg.weight};
        color: ${theme.colors.white};
    `}

  @media (max-width: ${(p) => p.theme.mobile}) {
    font-size: ${(p) => p.theme.fontWeights.md.size};
  }
`;

const Genre = styled.h4`
  ${({ theme }) => `
  color: ${theme.colors.red};
`}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Score = styled.p`
  ${({ theme }) => `
  color: ${theme.colors.lightGrey};
  font-size: ${theme.fontWeights.md.size};
  font-weight: ${theme.fontWeights.md.weight};
  margin-right: 20px;
`}
`;

const AverageScore = styled.span`
  ${({ theme }) => `
  color: ${theme.colors.red};
  font-size: ${theme.fontWeights.md.size};
  font-weight: ${theme.fontWeights.md.weight};
`}
`;
