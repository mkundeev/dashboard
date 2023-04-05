import styled from "styled-components";
import { MEDIA } from "theme";

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media ${MEDIA.laptop} {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 18px;
  }
`;
