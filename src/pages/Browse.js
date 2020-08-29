import React from "react";
import styled from "styled-components";
import { BrowseContainer } from "../components/browse-container";

export const Browse = () => (
  <Wrapper>
    <BrowseContainer />
    <Stuff></Stuff>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Stuff = styled.div`
  width: 240px;
  margin-left: 10px;
`;
