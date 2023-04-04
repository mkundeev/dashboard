import React from "react";
import * as Styled from "./UserProfile.styled";

interface IProps {
  name: string;
  position: string;
  avatar: string;
}
export default function UserProfile({ avatar, name, position }: IProps) {
  return (
    <Styled.UserProfileWrap>
      <Styled.Avatar src={avatar} />
      <div>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Position>{position}</Styled.Position>
      </div>
    </Styled.UserProfileWrap>
  );
}
