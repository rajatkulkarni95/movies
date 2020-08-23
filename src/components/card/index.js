import React from "react";
import styled from "styled-components";

export const Card = ({ title, poster_path, release_date }) => {
  const image_url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <Wrapper>
      <Image src={image_url} alt={title} />
      <TextBox>
        <Title>{title}</Title>
        <SubTitle>{release_date}</SubTitle>
      </TextBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
`;

const Image = styled.img`
  height: 280px;
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
