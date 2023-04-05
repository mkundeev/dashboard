import React from "react";
import { useMedia } from "react-use";
import * as Styled from "./SideBar.styled";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import UserProfile from "./UserProfile/UserProfile";
import avatar from "assets/avatar.jpg";
import { MEDIA } from "theme";

export default function SideBar() {
  const isWide = useMedia(MEDIA.laptop);
  return (
    <Styled.Container>
      <div>
        <Styled.LogoUserWrap>
          <Logo />
          {!isWide && (
            <UserProfile
              avatar={avatar}
              name="evano"
              position="project manager"
            />
          )}
        </Styled.LogoUserWrap>
        <Navigation />
      </div>
      {isWide && (
        <UserProfile avatar={avatar} name="evano" position="project manager" />
      )}
    </Styled.Container>
  );
}
