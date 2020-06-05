import { ADD_ITEM, REMOVE_ITEM, CHANGE_RATIO } from "../actions";

const initialState = {
  ratio: 4.2,
  transactions: [
    {
      id: 1,
      name: "Transaction first",
      value: 12,
    },
    {
      id: 2,
      name: "Transaction last",
      value: 52,
    },
    {
      id: 3,
      name: "Buy car",
      value: 500,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: state.transactions.length + 1,
            name: action.name,
            value: action.value,
          },
        ],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        transactions: state.transactions.filter(({ id }) => id !== action.id),
      };
    case CHANGE_RATIO:
      return {
        ...state,
        ratio: action.value,
      };
    default:
      return state;
  }
};

export default rootReducer;
