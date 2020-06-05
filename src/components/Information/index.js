import React, { useState } from "react";
import { connect } from "react-redux";

import Wrapper from "./Wrapper";
import Title from "../Title/Title";

const sumOfTransactions = (items, ratio) =>
  (
    items.reduce((acc, { value }) => acc + value, 0) * (ratio ? ratio : 1)
  ).toFixed(2);

const maxAmount = (items, ratio) => {
  const max = items.reduce(
    (prev, current) => (prev.value > current.value ? prev : current),
    0
  );

  if (max && ratio) {
    return max;
  }
};

const Information = ({ transactions, ratio }) => {
  const [show, setShow] = useState(false);

  const itemMaxAmount = maxAmount(transactions, ratio);
  return (
    <Wrapper show={show}>
      <Title small>Information</Title>
      <p className="handle" onClick={() => setShow(!show)}>
        Information
      </p>
      <div>
        <p>
          <strong>Sum of all transactions in EURO: </strong>
          <span className="marker">{`${sumOfTransactions(
            transactions
          )} EUR`}</span>
        </p>
        <p>
          <strong>Sum of all transactions in PLN: </strong>
          <span className="marker">{`${sumOfTransactions(
            transactions,
            ratio
          )} PLN`}</span>
        </p>
      </div>
      <div>
        <strong>Transactions with the largest amount:</strong>
        {itemMaxAmount ? (
          <p className="marker">
            {`id: ${itemMaxAmount.id} | name: ${
              itemMaxAmount.name
            } | EUR: ${itemMaxAmount.value.toFixed(2)} 
                 | PLN: ${(itemMaxAmount.value * ratio).toFixed(2)}`}
          </p>
        ) : null}
      </div>
    </Wrapper>
  );
};

const mapStateToProps = ({ transactions, ratio }) => ({ transactions, ratio });

export default connect(mapStateToProps, null)(Information);
