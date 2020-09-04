import React from "react";
import styled from "styled-components";

export const Cast = ({ cast, crew }) => {
  return (
    <Wrapper>
      <Section>
        <Heading>Actors</Heading>
        <ul>
          {cast &&
            cast
              .slice(0, 5)
              .map((member) => (
                <ListItem key={member.cast_id}>{member.name}</ListItem>
              ))}
        </ul>
      </Section>
      <Section>
        <Heading>Director</Heading>
        <ul>
          {crew &&
            crew
              .filter((member) => member.job === "Director")
              .map((director) => (
                <ListItem key={director.id}>{director.name}</ListItem>
              ))}
        </ul>
      </Section>
      <Section>
        <Heading>Screenwriter</Heading>
        <ul>
          {crew &&
            crew
              .filter((member) => member.job === "Screenplay")
              .map((writer) => (
                <ListItem key={writer.id}>{writer.name}</ListItem>
              ))}
        </ul>
      </Section>
      <Section>
        <Heading>Producer</Heading>
        <ul>
          {crew &&
            crew
              .filter((member) => member.job === "Producer")
              .map((producer) => (
                <ListItem key={producer.id}>{producer.name}</ListItem>
              ))}
        </ul>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.p`
  ${({ theme }) => `
    font-size: ${theme.fontWeights.md.size};
    font-weight: ${theme.fontWeights.lg.weight};
    color: ${theme.colors.white};
    margin: 10px 0;
`}
`;

const ListItem = styled.li`
  list-style-type: none;
  color: ${(p) => p.theme.colors.red};
  font-weight: ${(p) => p.theme.fontWeights.md.weight};
  margin: 5px 0;
`;
