import React from "react";
import * as Styled from "./SearchBar.styled";

interface IProps {
  value: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}
export default function SearchBar({ value, onChange }: IProps) {
  return (
    <Styled.SearchLabel>
      <Styled.SearchIcon />
      <Styled.SearchInput
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </Styled.SearchLabel>
  );
}
