import React from "react";
import { IData } from "types/data.types";
import CustomerTableRow from "./CustomerTableRow";
import * as Styled from "./CustomerTable.styled";

interface IProps {
  data: IData[];
}
export default function CustomersTable({ data }: IProps) {
  return (
    <Styled.Table>
      <Styled.TableHeader>
        <Styled.TableRow>
          <th>Customer Name</th>
          <th>Company</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Country</th>
          <th>Status</th>
        </Styled.TableRow>
      </Styled.TableHeader>
      <tbody>
        {data &&
          data.map((customer) => (
            <CustomerTableRow data={customer} key={customer.name} />
          ))}
      </tbody>
    </Styled.Table>
  );
}
