import React from "react";

import AddTransactionForm from "../components/AddTransactionForm";
import ListTransactions from "../components/ListTransactions";
import RatioInput from "../components/RatioInput";
import Information from "../components/Information";

import Template from "../template/Template";

import Title from "../components/Title/Title";
import Container from "../components/Container/Container";
import Row from "../components/Row/Row";

const App = () => (
  <Template>
    <>
      <Information />
      <Container>
        <Title>Transaction App</Title>
        <Row>
          <RatioInput />
          <AddTransactionForm />
        </Row>
        <Row>
          <ListTransactions />
        </Row>
      </Container>
    </>
  </Template>
);

export default App;
