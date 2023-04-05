import { useEffect, useState } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import { data } from "data/data";
import * as Styled from "./Customers.styled";
import CustomersTable from "./CustomersTable/CustomersTable";
import Pagination from "components/Pagination/Pagination";
import { IData } from "types/data.types";
export default function Customers() {
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState<IData[]>([]);

  useEffect(() => {
    const newData = data.filter((customer) =>
      Object.values(customer).find((value) =>
        value.toLowerCase().includes(search.toLowerCase())
      )
    );
    setCustomers(newData);
  }, [search]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.trim());
  };
  return (
    <>
      <Styled.Header>
        <div>
          <Styled.Title>All Customers</Styled.Title>
          <Styled.Active>Active Members</Styled.Active>
        </div>
        <SearchBar value={search} onChange={handleChange} />
      </Styled.Header>
      <CustomersTable data={customers} />
      <Styled.Footer>
        <Styled.FooterText>
          Showing data 1 to 8 of 256K entries
        </Styled.FooterText>
        <Pagination />
      </Styled.Footer>
    </>
  );
}
