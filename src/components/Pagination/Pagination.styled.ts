import styled from "styled-components";
import { COLORS, FONTS } from "theme";

interface IProps {
  active?: boolean;
}

export const PaginationWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const PaginationButton = styled.button`
  width: 25px;
  padding: 6px 0;
  border-radius: 4px;
  background-color: ${({ active }: IProps) =>
    active ? COLORS.paginationBgcActive : COLORS.paginationBgc};
  border: ${({ active }: IProps) =>
    `1px solid ${active ? COLORS.paginationBgcActive : COLORS.tableBorder}`};
  color: ${({ active }: IProps) => (active ? "white" : COLORS.paginationText)};
  line-height: 1;
  font-size: 12px;
  font-weight: ${FONTS.WEIGHTS.medium};
  font-family: ${FONTS.FAMILY.normal};
  cursor: pointer;
  :hover {
    background-color: ${COLORS.paginationBgcActive};
    border: 1px solid ${COLORS.paginationBgcActive};
    color: white;
  }
`;
