import styled from "styled-components";
import { MEDIA } from "theme";

export const ContentContainer = styled.div`
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  @media ${MEDIA.laptop} {
    padding: 41px 20px 0 20px;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  border-radius: 30px;
  padding: 15px;
  @media ${MEDIA.bigLaptop} {
    padding: 30px 44px 40px 38px;
  }
`;
