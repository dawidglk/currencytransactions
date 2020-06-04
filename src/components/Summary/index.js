import React from "react";
import { connect } from "react-redux";

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

const Summary = ({ transactions, ratio }) => {
  if (transactions) {
    const itemMaxAmount = maxAmount(transactions, ratio);
    return (
      <>
        <p>Suma w euro: {sumOfTransactions(transactions)}</p>
        <p>
          Suma w PLN:{" "}
          {ratio
            ? `${sumOfTransactions(transactions, ratio)}`
            : `brak przelicznika`}
        </p>
        <p>
          {itemMaxAmount
            ? `${itemMaxAmount.value} ${itemMaxAmount.name} ${
                itemMaxAmount.value * ratio
              }`
            : null}
        </p>
      </>
    );
  }
};

const mapStateToProps = ({ transactions, ratio }) => ({ transactions, ratio });

export default connect(mapStateToProps, null)(Summary);
