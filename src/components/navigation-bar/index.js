import React from "react";
import styled from "styled-components";
import { Search } from "../search";
import { useHistory } from "react-router-dom";
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
    history.push("/");
  };

  return (
    <Wrapper>
      <Search handleChange={handleChange} handleSubmit={handleSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  margin: 30px;
  width: calc(${window.screen.width} * 0.8) px;

  @media (max-width: ${(p) => p.theme.mobile}) {
    margin: 30px 0;
    justify-content: center;
  }
`;
