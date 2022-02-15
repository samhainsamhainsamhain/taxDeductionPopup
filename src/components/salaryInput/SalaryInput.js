import React from "react";

import classes from "./SalaryInput.module.css";

export default function SalaryInput({
  salarySubmitHandler,
  salaryChangeHandler,
  salary,
}) {
  return (
    <form className={classes.calculateForm} onSubmit={salarySubmitHandler}>
      <label htmlFor="salary">
        <h2 className={classes.calculateTitle}>Ваша зарплата в месяц</h2>
      </label>
      <input
        type="number"
        className={classes.calculateInput}
        placeholder="Введите данные"
        id="salary"
        onChange={salaryChangeHandler}
        value={salary}
        min="0"
        max="1000000"
      />
      <button className={classes.calculateBtn} type="submit">
        Рассчитать
      </button>
    </form>
  );
}
