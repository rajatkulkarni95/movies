import React from "react";
import styled from "styled-components";
import { CardContainer } from "../components/card-container";

export const Browse = () => (
  <Wrapper>
    <CardContainer />
    <Stuff>123</Stuff>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Stuff = styled.div`
  width: 240px;
  margin-left: 10px;
  background: #fff;
`;
