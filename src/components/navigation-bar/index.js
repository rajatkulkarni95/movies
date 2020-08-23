import React from "react";
import styled from "styled-components";
import { Search } from "../search";
import { NavLink } from "react-router-dom";

export const Navbar = () => (
  <Wrapper>
    <Tabs>
      <StyledLink exact to="/">
        Discover
      </StyledLink>
      <StyledLink to="/browse">Browse</StyledLink>
    </Tabs>
    <Search />
  </Wrapper>
);

const Wrapper = styled.header`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
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
