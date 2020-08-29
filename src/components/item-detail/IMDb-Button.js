import React from "react";
import styled from "styled-components";
import { SiImdb } from "react-icons/si";

export const IMDB = ({ id, rating }) => (
  <Button href={`https://www.imdb.com/title/${id}`}>
    <SiImdb size={40} color="#F5C518" />
    <Rating> {rating}/10</Rating>
  </Button>
);

const Button = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.colors.dark};
  border: 1px solid ${(p) => p.theme.colors.lightGrey};
  border-radius: 4px;
  color: ${(p) => p.theme.colors.white};
  margin-right: 20px;
  cursor: pointer;
  font-family: ${(p) => p.theme.font};
  font-size: ${(p) => p.theme.fontWeights.xs.size};
  text-decoration: none;
`;

const Rating = styled.span`
  padding: 0 10px;
`;
