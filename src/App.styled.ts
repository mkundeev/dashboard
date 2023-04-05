import styled from "styled-components";
import { COLORS, MEDIA } from "theme";

export const Background = styled.div`
  min-width: 320px;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.background};
  @media ${MEDIA.laptop} {
    flex-direction: row;
  }
`;
