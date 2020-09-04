import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper>
      <Logo>Filmroll</Logo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: none;
  @media (max-width: 400px) {
    padding: 20px;
    font-size: 14px;
  }
`;

const Logo = styled.h3`
  margin-left: 50px;
  font-family: "Rock Salt", cursive;
  @media (max-width: 440px) {
    margin: 5px 0 0 5px;
  }
`;
