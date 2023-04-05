import styled from "styled-components";
import { FONTS } from "theme";

export const ContentContainer = styled.div`
  padding: 41px 95px 0 71px;
`;
export const Welcome = styled.p`
  font-size: 24px;
  font-weight: ${FONTS.WEIGHTS.medium};
  margin-bottom: 51px;
  text-transform: capitalize;
`;
export const ContentWrap = styled.div`
  min-width: 968px;
  position: relative;
  background-color: white;
  border-radius: 30px;
  padding: 30px 44px 40px 38px;
`;
