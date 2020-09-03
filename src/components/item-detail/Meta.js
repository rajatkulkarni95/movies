import React from "react";
import styled from "styled-components";
import { FavouriteButton } from "./Favourite";

export const MetaData = ({ title, vote_average, genres }) => {
  return (
    <Meta>
      <Head>
        <Title>{title}</Title>
        <Genre>
          {genres &&
            genres.reduce((acc, genre) => `${genre.name} & ${acc.name}`)}
        </Genre>
      </Head>
      <Right>
        <Score>
          <AverageScore>{vote_average}</AverageScore>/10
        </Score>
        <FavouriteButton />
      </Right>
    </Meta>
  );
};

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
