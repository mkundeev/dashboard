import React from "react";
import * as Styled from "./Logo.styled";
import logo from "assets/logo.svg";

export default function Logo() {
  return (
    <Styled.Logo>
      <img src={logo} alt="logo" />
      <Styled.LogoText>
        DashBoard<Styled.Version>v.01</Styled.Version>
      </Styled.LogoText>
    </Styled.Logo>
  );
}
