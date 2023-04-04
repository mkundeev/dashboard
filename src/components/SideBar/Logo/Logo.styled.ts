import styled from "styled-components";
import { COLORS, FONTS } from "theme";

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 54px;
`;

export const LogoText = styled.p`
  font-weight: ${FONTS.WEIGHTS.semiBold};
  font-size: ${FONTS.SIZES.logo};
  margin-left: 8px;
`;

export const Version = styled.span`
  margin-left: 4px;
  color: ${COLORS.version};
  font-size: ${FONTS.SIZES.version};
`;
