import styled from "styled-components";
import { COLORS, FONTS } from "theme";

interface IProps {
  active?: boolean;
  fill?: boolean;
}

export const NavListItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px;
  border-radius: 8px;
  color: ${({ active }: IProps) => (active ? "white" : COLORS.navigationItem)};
  background-color: ${({ active }: IProps) => active && COLORS.accentNav};
  > svg > path {
    stroke: ${({ active }: IProps) => active && "white"};
  }
  :hover {
    color: white;
    background-color: ${COLORS.accentNav};
  }
  :hover div svg path {
    fill: ${({ fill }: IProps) => fill && "white"};
    stroke: ${({ fill, active }: IProps) => !fill && !active && "white"};
  }
  :hover > svg > path {
    stroke: white;
  }
`;

export const Title = styled.p`
  margin-left: 14px;
  font-weight: ${FONTS.WEIGHTS.medium};
`;

export const IconTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;
