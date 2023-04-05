import styled from "styled-components";
import { MEDIA } from "theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: white;
  @media ${MEDIA.laptop} {
    padding: 36px 28px 76px 28px;
    width: 306px;
    min-height: 100vh;
  }
`;

export const LogoUserWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  @media ${MEDIA.tablet} {
    flex-direction: row;
  }
  @media ${MEDIA.laptop} {
    margin-bottom: 54px;
  }
`;
