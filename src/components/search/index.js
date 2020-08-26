import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

export const Search = ({ handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <Input type="text" placeholder="Search" onChange={handleChange} />
      </Label>
    </form>
  );
};

const Label = styled.label`
  padding: 10px 15px;
  width: 240px;
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.grey};
`;

const Input = styled.input`
  margin: 0 10px;
  background: none;
  border: none;
  outline: none;
  color: ${(p) => p.theme.colors.white};
  font-family: ${(p) => p.theme.font};
  font-size: ${(p) => p.theme.fontWeights.xs.size};
`;
