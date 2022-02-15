import React, { useState } from "react";

import SalarySubmit from "../salarySubmit/SalarySubmit";
import SalaryInput from "../salaryInput/SalaryInput";
import SalaryList from "../salaryList/SalaryList";

import { calculatePaymentArray } from "../../Utility";

export default function SalaryForm() {
  const [formData, setFormData] = useState({
    salary: "",
    formatedSalary: "",
    deductionType: "",
    payments: [],
    isCalculated: false,
  });

  function salarySubmitHandler(event) {
    event.preventDefault();
    setFormData((prevState) => {
      return {
        ...prevState,
        payments: calculatePaymentArray(formData.salary),
      };
    });
  }

  function salaryChangeHandler(event) {
    let salary = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        salary: salary,
        formatedSalary: salary,
      };
    });
  }

  return (
    <div>
      <SalaryInput
        salarySubmitHandler={salarySubmitHandler}
        salaryChangeHandler={salaryChangeHandler}
        salary={formData.salary}
      />
      {formData.payments.length > 0 ? (
        <>
          <SalaryList payments={formData.payments} />
          <SalarySubmit setFormData={setFormData} formData={formData} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
