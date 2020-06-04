import React, { useReducer } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions";

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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="add description"
        name="name"
        type="text"
        value={transaction.name}
        onChange={handleChange}
      />
      <input
        placeholder="value"
        name="value"
        type="number"
        value={transaction.value}
        onChange={handleChange}
      />
      <button>Dodaj</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (name, value) => dispatch(addItem(name, value)),
});

export default connect(null, mapDispatchToProps)(AddTransactionForm);
