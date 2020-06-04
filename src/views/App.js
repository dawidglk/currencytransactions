import React from "react";
import AddTransactionForm from "../components/AddTransactionForm";
import List from "../components/List";
import RatioInput from "../components/RatioInput";
import Summary from "../components/Summary";

class App extends React.Component {
  render() {
    return (
      <>
        <RatioInput />
        <AddTransactionForm />
        <List />
        <Summary />
      </>
    );
  }
}

export default App;
