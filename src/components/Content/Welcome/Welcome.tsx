import React from "react";
import * as Styled from "./Welcome.styled";

interface IProps {
  name: string;
}
export default function Welcome({ name }: IProps) {
  return (
    <Styled.Welcome>
      Hello {name}
      <span role="img" aria-label="hand">
        👋🏼,
      </span>
    </Styled.Welcome>
  );
}
