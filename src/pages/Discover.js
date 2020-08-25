import React from "react";
import styled from "styled-components";

export const Discover = () => {
  return (
    <Wrapper>
      <Carousel>
        <Image
          srcSet="https://cdn2.unrealengine.com/ss2-handscrossed-keyart-epic-1920x1080-783363404.jpg?h=1080&resize=1&w=1920"
          alt=""
        />
        <Text></Text>
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Carousel = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  flex: 60%;
`;

const Text = styled.div`
  flex: 40%;
  background: white;
`;
