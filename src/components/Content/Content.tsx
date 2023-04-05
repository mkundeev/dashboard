import React from "react";
import Welcome from "./Welcome/Welcome";
import * as Styled from "./Content.styled";

interface IProps {
  children?: JSX.Element | JSX.Element[];
}
export default function Content({ children }: IProps) {
  return (
    <Styled.ContentContainer>
      <Welcome name="evano" />
      <Styled.ContentWrap>{children}</Styled.ContentWrap>
    </Styled.ContentContainer>
  );
}
