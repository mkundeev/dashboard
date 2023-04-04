import React, { ReactNode } from "react";
import { ReactComponent as NavArrow } from "assets/navArrow.svg";
import * as Styled from "./NavigationItem.styled";

interface IProps {
  title: string;
  icon: ReactNode;
  active?: boolean;
  noArrow?: boolean;
}
export default function NavigationItem({
  title,
  icon,
  noArrow,
  active,
}: IProps) {
  return (
    <Styled.NavListItem active={active}>
      <Styled.IconTitleWrap>
        {icon}
        <Styled.Title>{title}</Styled.Title>
      </Styled.IconTitleWrap>
      {!noArrow && <NavArrow />}
    </Styled.NavListItem>
  );
}
