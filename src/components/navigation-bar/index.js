import React from "react";
import styled from "styled-components";
import { Search } from "../search";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "../../context";
import { searchMovies } from "../../services";

export const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    dispatch({ type: "SEARCH", payload: e.target.value });
    searchMovies(e.target.value).then(({ results }) =>
      dispatch({ type: "SEARCH_FILTERED", payload: results })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/browse");
  };

  return (
    <Wrapper>
      <Tabs>
        <StyledLink exact to="/">
          Discover
        </StyledLink>
        <StyledLink to="/browse">Browse</StyledLink>
      </Tabs>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />
    </Wrapper>
  );
};

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
