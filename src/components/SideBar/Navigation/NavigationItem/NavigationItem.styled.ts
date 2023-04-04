import styled from "styled-components";
import { COLORS, FONTS } from "theme";

interface IProps {
  active?: boolean;
}

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 11px;
  border-radius: 8px;
  color: ${({ active }: IProps) => (active ? "white" : COLORS.navigationItem)};
  background-color: ${({ active }: IProps) => active && COLORS.accentNav};
  > svg > path {
    stroke: ${({ active }: IProps) => active && "white"};
  }
`;

export const Title = styled.p`
  margin-left: 14px;
  font-weight: ${FONTS.WEIGHTS.medium};
`;

export const IconTitleWrap = styled.li`
  display: flex;
  align-items: center;
`;
