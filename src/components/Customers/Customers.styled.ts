import styled from "styled-components";
import { COLORS, FONTS, MEDIA } from "theme";

export const Title = styled.p`
  font-size: 22px;
  font-weight: ${FONTS.WEIGHTS.semiBold};
  margin-bottom: 7px;
`;

export const Active = styled.p`
  color: ${COLORS.lightGreen};
  margin-bottom: 10px;
  @media ${MEDIA.laptop} {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  margin-bottom: 10px;
  @media ${MEDIA.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media ${MEDIA.laptop} {
    margin-bottom: 40px;
  }
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${MEDIA.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.div`
  font-weight: ${FONTS.WEIGHTS.medium};
  color: ${COLORS.lightGrey};
  margin-bottom: 10px;
`;
