import styled from "styled-components";
import { COLORS, FONTS } from "theme";

export const Title = styled.p`
  font-size: 22px;
  font-weight: ${FONTS.WEIGHTS.semiBold};
  margin-bottom: 7px;
`;

export const Active = styled.p`
  color: ${COLORS.lightGreen};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterText = styled.div`
  font-weight: ${FONTS.WEIGHTS.medium};
  color: ${COLORS.lightGrey};
`;
