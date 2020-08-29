import React from "react";
import styled from "styled-components";

export const Info = ({ overview }) => (
  <Wrapper>
    <Plot>Plot</Plot>
    <Overview>{overview}</Overview>
  </Wrapper>
);

const Overview = styled.p`
  margin-top: 10px;
  line-height: 1.5;
`;

const Wrapper = styled.div`
  margin: 30px 0;
`;

const Plot = styled.p`
  color: ${(p) => p.theme.colors.lightGrey};
`;
