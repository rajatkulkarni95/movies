import React from "react";
import styled from "styled-components";

export const MetaData = ({ runtime }) => (
  <Meta>
    <MetaDetail>{runtime} min</MetaDetail>
    <MetaDetail>year</MetaDetail>
    <Rating>rated</Rating>
  </Meta>
);

const Meta = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.span`
  padding: 5px;
  background: ${(p) => p.theme.colors.lightGrey};
  color: ${(p) => p.theme.colors.dark};
  border-radius: 5px;
`;

const MetaDetail = styled.span`
  color: ${(p) => p.theme.colors.lightGrey};
  margin-right: 10px;
`;
