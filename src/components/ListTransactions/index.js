import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../actions";

import Icon from "../Icon/Icon";
import Title from "../Title/Title";
import IconRemove from "../../assets/media/remove.svg";

import Wrapper from "./Wrapper";

const handlePriceConverter = (ratio, value) =>
  ((ratio || 0) * value).toFixed(2);

const ListTransactions = ({ transactions, ratio = 0, removeItem }) => (
  <>
    {transactions ? (
      <>
        <Title small>Transations</Title>
        <Wrapper>
          {transactions.map(({ id, name, value }) => (
            <li key={id}>
              <span>{id}</span>
              <span>{name}</span>
              <span>{value.toFixed(2)} EUR</span>
              <span>{handlePriceConverter(ratio, value)} PLN</span>
              <Icon active src={IconRemove} onClick={() => removeItem(id)} />
            </li>
          ))}
        </Wrapper>
      </>
    ) : null}
  </>
);

const mapStateToProps = ({ transactions, ratio }) => ({ transactions, ratio });

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTransactions);
