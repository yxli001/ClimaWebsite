import React from "react";
import styles from "./Benefit.module.css";

export const Benefit = ({ text, image }) => {
  return (
    <div className={styles.benefitContainer}>
      <img src={image} className={styles.image} alt={text} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
