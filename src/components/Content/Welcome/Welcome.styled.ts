import styled from "styled-components";
import { FONTS, MEDIA } from "theme";

export const ContentWrap = styled.div`
  padding-top: 41px;
  padding: 41px 95px 0 71px;
`;
export const Welcome = styled.p`
  font-size: 24px;
  font-weight: ${FONTS.WEIGHTS.medium};
  margin-bottom: 10px;
  text-transform: capitalize;
  @media ${MEDIA.laptop} {
    margin-bottom: 51px;
  }
`;
