import React from "react";
import { IData } from "types/data.types";
import * as Styled from "./CustomerTable.styled";

interface IProps {
  data: IData;
}
export default function CustomerTableRow({ data }: IProps) {
  const { name, company, country, email, phone, status } = data;
  return (
    <Styled.TableRow>
      <td>{name}</td>
      <td>{company}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{country}</td>
      <td>
        <Styled.Status status={status}>{status}</Styled.Status>
      </td>
    </Styled.TableRow>
  );
}
