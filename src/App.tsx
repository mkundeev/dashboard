import React from "react";
import SideBar from "./components/SideBar/SideBar";
import * as Styled from "./App.styled";
import Content from "components/Content/Content";
import Customers from "components/Customers/Customers";

function App() {
  return (
    <Styled.Background>
      <SideBar />
      <Content>
        <Customers />
      </Content>
    </Styled.Background>
  );
}

export default App;
