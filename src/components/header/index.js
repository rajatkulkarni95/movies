import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <Wrapper>
      <Logo>Filmroll</Logo>
      <Tabs>
        <StyledLink exact to="/">
          Trending
        </StyledLink>
        <StyledLink exact to="/favourites">
          Favourites
        </StyledLink>
      </Tabs>
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

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  margin-right: 20px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.darkWhite};

  :hover {
    color: ${(p) => p.theme.colors.white};
  }

  &.active {
    color: ${(p) => p.theme.colors.white};
  }
`;
