import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = ({
  id,
  title,
  poster_path,
  release_date,
  genres,
  genre_ids,
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const movieGenres = genre_ids.map((genre) =>
    genres.find(({ id }) => id === genre)
  );

  return (
    <Wrapper to={`/movie/${id}`}>
      <Image src={imageUrl} alt={title} />
      <TextBox>
        <Title>{title}</Title>
        <SubTitle>
          {movieGenres.reduce(
            (accumulator, { name }) => `${accumulator} | ${name}`,
            ""
          )}
        </SubTitle>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 210px;
  text-decoration: inherit;
  color: inherit;
`;

const Image = styled.img`
  height: 280px;
  background-color: ${(p) => p.theme.colors.grey};
  text-align: center;
`;

const TextBox = styled.div`
  margin-top: 20px;
`;

const Title = styled.p`
  margin-bottom: 2px;
  word-wrap: break-word;
`;

const SubTitle = styled.p`
  font-size: 12px;
  color: ${(p) => p.theme.colors.lightGrey};
`;
