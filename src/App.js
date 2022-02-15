import React, { useState } from "react";

import classes from "./App.module.css";
import closeIcon from "./assets/close.svg";

import SalaryForm from "./components/salaryForm/SalaryForm";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const popup = (
    <div className={classes.container}>
      <button
        className={classes.closeButton}
        onClick={() => setShowPopup(!showPopup)}
      >
        <img className={classes.closeIcon} src={closeIcon} alt="close button" />
      </button>
      <section>
        <h1 className={classes.title}>Налоговый вычет</h1>
        <p className={classes.description}>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </p>
      </section>
      <SalaryForm />
    </div>
  );

  const greet = (
    <div className={classes.greetScreen}>
      <button
        className={classes.greetButton}
        onClick={() => setShowPopup(!showPopup)}
      >
        Налоговый вычет
      </button>
    </div>
  );

  return <div className={classes.app}>{showPopup ? popup : greet}</div>;
}

export default App;
