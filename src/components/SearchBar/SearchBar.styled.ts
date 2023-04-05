import styled from "styled-components";
import { ReactComponent as Search } from "assets/search.svg";
import { COLORS } from "theme";

export const SearchLabel = styled.label`
  display: block;
  position: relative;
  width: fit-content;
  margin-left: auto;
`;

export const SearchInput = styled.input`
  display: block;
  height: 36px;
  width: 216px;
  border: none;
  border-radius: 10px;
  background-color: ${COLORS.searchBgc};
  padding-left: 40px;
  &::placeholder {
    color: ${COLORS.lightGrey};
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;
