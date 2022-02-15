import React from "react";

import SalaryItem from "../salaryItem/SalaryItem";

import classes from "./SalaryList.module.css";

export default function SalaryList({ payments }) {
  return (
    <div className={classes.salaryListContainer}>
      <h2 className={classes.salaryListTitle}>
        Итого можете внести в качестве досрочных:
      </h2>
      <ul className={classes.salaryList}>
        {payments.map((payment, index) => {
          return (
            <SalaryItem
              payment={payment}
              year={index + 1}
              key={index + payment}
            />
          );
        })}
      </ul>
    </div>
  );
}
