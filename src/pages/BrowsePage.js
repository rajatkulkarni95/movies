import React from "react";
import styled from "styled-components";
import { BrowseContainer } from "../components/browse-container";

export const Browse = () => {
  return (
    <Wrapper>
      <BrowseContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
