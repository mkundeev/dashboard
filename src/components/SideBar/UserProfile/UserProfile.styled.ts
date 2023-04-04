import styled from "styled-components";
import { COLORS, FONTS } from "theme";

export const UserProfileWrap = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  display: inline-block;
  margin-right: 12px;
  width: 42px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  text-transform: capitalize;
  font-weight: ${FONTS.WEIGHTS.medium};
`;

export const Position = styled.p`
  text-transform: capitalize;
  color: ${COLORS.position};
  font-size: 12px;
`;
