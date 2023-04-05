import React from "react";
import * as Styled from "./SearchBar.styled";

export default function SearchBar() {
  return (
    <Styled.SearchLabel>
      <Styled.SearchIcon />
      <Styled.SearchInput type="text" placeholder="Search" />
    </Styled.SearchLabel>
  );
}
