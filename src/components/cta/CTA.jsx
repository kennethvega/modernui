import React from "react";
import styles from "./CTA.module.scss";
const CTA = () => {
  return (
    <div className={styles.gpt3__cta}>
      <div className={styles["gpt3__cta-content"]}>
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className={styles["gpt3__cta-btn"]}>
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
