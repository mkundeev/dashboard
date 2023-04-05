import React from "react";
import * as Styled from "./Pagination.styled";

export default function Pagination() {
  return (
    <Styled.PaginationWrap>
      <Styled.PaginationButton type="button">{"<"}</Styled.PaginationButton>
      <Styled.PaginationButton type="button" active>
        1
      </Styled.PaginationButton>
      <Styled.PaginationButton type="button">2</Styled.PaginationButton>
      <Styled.PaginationButton type="button">3</Styled.PaginationButton>
      <span>...</span>
      <Styled.PaginationButton type="button">40</Styled.PaginationButton>
      <Styled.PaginationButton type="button">{">"}</Styled.PaginationButton>
    </Styled.PaginationWrap>
  );
}
