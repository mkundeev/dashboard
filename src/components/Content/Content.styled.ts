import styled from "styled-components";
import { MEDIA } from "theme";

export const ContentContainer = styled.div`
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  @media ${MEDIA.laptop} {
    width: fit-content;
    padding: 41px 20px 10px 20px;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  position: relative;
  background-color: white;
  border-radius: 30px;
  padding: 15px;
  @media ${MEDIA.bigLaptop} {
    max-width: 968px;
    padding: 30px 44px 40px 38px;
  }
`;
