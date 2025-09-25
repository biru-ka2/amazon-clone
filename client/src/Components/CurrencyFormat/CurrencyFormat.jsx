import React from "react";
import numeral from "numeral";

import classes from "./CurrencyFormat.module.css";

const CurrencyFormat = ({ amount }) => {
  const formattedAmount = numeral(amount).format("$0,0.00");
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;
