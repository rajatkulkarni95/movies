import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <Wrapper>
      <Logo>Movie Database</Logo>
      <Button>Your Account</Button>
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

const Button = styled.button`
  border: none;
  letter-spacing: 1;
  padding: 10px;
  cursor: pointer;
  margin-right: 50px;

  ${({ theme }) => `
    background: ${theme.colors.dark};
    color: ${theme.colors.white};
    font-family: ${theme.font};
  `}

  @media (max-width: 440px) {
    padding: 5px;
    margin-right: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;
