import React from "react";
import Welcome from "./Welcome/Welcome";
import * as Styled from "./Content.styled";

export default function Content() {
  return (
    <Styled.ContentWrap>
      <Welcome name="evano" />
    </Styled.ContentWrap>
  );
}
