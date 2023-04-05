import React from "react";
import SearchBar from "components/SearchBar/SearchBar";
import { data } from "data/data";
import * as Styled from "./Customers.styled";
import CustomersTable from "./CustomersTable/CustomersTable";
import Pagination from "components/Pagination/Pagination";
export default function Customers() {
  return (
    <div>
      <Styled.Header>
        <div>
          <Styled.Title>All Customers</Styled.Title>
          <Styled.Active>Active Members</Styled.Active>
        </div>
        <SearchBar />
      </Styled.Header>
      <CustomersTable data={data} />
      <Styled.Footer>
        <Styled.FooterText>
          Showing data 1 to 8 of 256K entries
        </Styled.FooterText>
        <Pagination />
      </Styled.Footer>
    </div>
  );
}
