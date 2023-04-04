import React from "react";
import * as Styled from "./SideBar.styled";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserProfile from "./UserProfile/UserProfile";
import avatar from "assets/avatar.jpg";

export default function SideBar() {
  return (
    <Styled.Container>
      <div>
        <Logo />
        <Navigation />
      </div>
      <UserProfile avatar={avatar} name="evano" position="project manager" />
    </Styled.Container>
  );
}
