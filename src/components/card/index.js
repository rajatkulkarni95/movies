import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FallbackImage from "../../assets/fallbackimage.png";

export const Card = ({ id, title, poster_path }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Wrapper to={`/movie/${id}`}>
      <Image src={imageUrl} alt={title} />
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 175px;
  text-decoration: inherit;
  color: inherit;
`;

const Image = styled.img`
  height: 220px;
  background-color: ${(p) => p.theme.colors.grey};
  text-align: center;
  border-radius: 4px;
  background-image: url(${FallbackImage});
`;
