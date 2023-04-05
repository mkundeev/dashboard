import styled from "styled-components";
import { COLORS, FONTS } from "theme";

interface IProps {
  status: string;
}

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 30px;
`;

export const TableHeader = styled.thead`
  th {
    color: ${COLORS.lightGrey};
    text-align: left;
    padding-bottom: 14px;
    font-weight: ${FONTS.WEIGHTS.medium};
  }
  th:last-child {
    text-align: center;
    width: 82px;
  }
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    width: 100%;
    border-bottom: 1px solid ${COLORS.tableBorder};
  }
`;

export const TableRow = styled.tr`
  font-weight: ${FONTS.WEIGHTS.medium};
  td {
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${COLORS.tableText};
    border-bottom: 1px solid ${COLORS.tableBorder};
  }
`;

export const Status = styled.div`
  margin: 0 auto;
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  border-radius: 4px;
  text-align: center;
  text-transform: capitalize;
  border: ${({ status }: IProps) =>
    `1px solid ${
      status === "active" ? COLORS.statusActivBorder : COLORS.statusInactivText
    }`};
  color: ${({ status }: IProps) =>
    status === "active" ? COLORS.statusActivText : COLORS.statusInactivText};
  background-color: ${({ status }: IProps) =>
    status === "active" ? COLORS.statusActivBgc : COLORS.statusInactivBgc};
`;
