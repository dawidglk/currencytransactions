import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../actions";

const handlePriceConverter = (ratio, value) =>
  ((ratio || 0) * value).toFixed(2);

const List = ({ transactions, ratio = 0, removeItem }) => (
  <>
    {transactions ? (
      <>
        {transactions.map(({ id, name, value }) => (
          <li key={id}>
            <span>{id} </span>
            <span>{name} </span>
            <span>{value.toFixed(2)} </span>
            <span>{handlePriceConverter(ratio, value)} </span>
            <span onClick={() => removeItem(id)}>USUN</span>
          </li>
        ))}
      </>
    ) : null}
  </>
);

const mapStateToProps = ({ transactions, ratio }) => ({ transactions, ratio });

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
