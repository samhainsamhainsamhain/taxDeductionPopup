import React from "react";

import { yearSuffixHandler, paymentSuffixHandler } from "../../Utility";

import classes from "./SalaryItem.module.css";

export default function SalaryItem({ payment, year }) {
  return (
    <li className={classes.item}>
      <input
        id={`${payment + year}`}
        className={classes.itemCheck}
        type="checkbox"
      />
      <label htmlFor={`${payment + year}`} className={classes.itemDescription}>
        <span className={classes.itemPayment}>
          {paymentSuffixHandler(payment)}
        </span>
        <span className={classes.itemYear}>{yearSuffixHandler(year)}</span>
      </label>
    </li>
  );
}
