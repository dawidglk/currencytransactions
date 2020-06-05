import React, { useReducer } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions";

import Button from "../Button/Button";
import Input from "../Input/Input";
import Paragraph from "../Paragraph/Paragraph";
import Wrapper from "./Wrapper";

const AddTransactionForm = ({ addItem }) => {
  const [transaction, setTransaction] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      value: "",
    }
  );

  const handleChange = (e) =>
    setTransaction({ [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, value } = transaction;

    if (name && value) {
      addItem(name, parseFloat(value));
      setTransaction({ name: "", value: "" });
    } else {
      console.log("brak");
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Paragraph>Add transaction:</Paragraph>
      <div>
        <Input
          placeholder="description"
          name="name"
          type="text"
          value={transaction.name}
          onChange={handleChange}
        />
        <Input
          placeholder="value"
          name="value"
          type="number"
          value={transaction.value}
          onChange={handleChange}
        />
        <Button>Add</Button>
      </div>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (name, value) => dispatch(addItem(name, value)),
});

export default connect(null, mapDispatchToProps)(AddTransactionForm);
