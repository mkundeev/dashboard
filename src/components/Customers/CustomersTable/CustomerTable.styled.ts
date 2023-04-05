import styled from "styled-components";
import { COLORS, FONTS, MEDIA } from "theme";

interface IProps {
  status: string;
}

export const TableWrap = styled.div`
  margin-bottom: 10px;

  width: 100%;
  overflow-x: auto;

  @media ${MEDIA.laptop} {
    margin-bottom: 30px;
  }
  @media ${MEDIA.tablet} {
    width: fit-content;
    overflow-x: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  @media ${MEDIA.mobile} {
    width: 450px;
  }
`;

export const TableHeader = styled.thead`
  th {
    color: ${COLORS.lightGrey};
    text-align: left;
    padding-bottom: 14px;
    font-weight: ${FONTS.WEIGHTS.medium};
    :not(:last-child) {
      padding-right: 10px;
      @media ${MEDIA.bigLaptop} {
        padding-right: 44px;
      }
    }
    :last-child {
      text-align: center;
      width: 82px;
    }
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
  font-size: 10px;
  font-weight: ${FONTS.WEIGHTS.medium};
  td {
    height: 69px;
    color: ${COLORS.tableText};
    border-bottom: 1px solid ${COLORS.tableBorder};
    hyphens: auto;
    text-overflow: ellipsis;
    overflow: hidden;
    :not(:last-child) {
      padding-right: 10px;
      @media ${MEDIA.bigLaptop} {
        padding-right: 44px;
      }
    }
  }
  @media ${MEDIA.tablet} {
    font-size: 12px;
  }
  @media ${MEDIA.bigLaptop} {
    font-size: 14px;
  }
`;

export const Status = styled.div`
  max-width: 80px;
  padding: 4px;
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
