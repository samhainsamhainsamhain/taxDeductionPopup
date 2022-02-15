import React from "react";

import classes from "./SalarySubmit.module.css";

export default function SalarySubmit({ setFormData, formData }) {
  function SubmitTypeHandler(type) {
    setFormData((prevState) => {
      return {
        ...prevState,
        deductionType: type,
      };
    });
  }

  return (
    <div className={classes.salarySubmit}>
      <div>
        <h2 className={classes.salarySubmitTitle}>Что уменьшаем?</h2>
        <input
          className={classes.salarySubmitControl}
          onClick={() => SubmitTypeHandler("payment")}
          type="radio"
          id="payment"
          name="decrease-type"
        />
        <label htmlFor="payment">Платеж</label>
        <input
          className={classes.salarySubmitControl}
          onClick={() => SubmitTypeHandler("term")}
          type="radio"
          id="term"
          name="decrease-type"
        />
        <label htmlFor="term">Срок</label>
      </div>
      <button
        className={classes.salarySubmitFinish}
        type="submit"
        disabled={formData.deductionType.length<1}
      >
        Добавить
      </button>
    </div>
  );
}
