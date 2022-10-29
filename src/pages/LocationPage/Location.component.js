import React from "react";
import styles from "./Location.module.css";

export const Location = ({ text, image }) => {
    return (
        <div className={styles.locationContainer} id="locations">
            <img src={image} className={styles.image} alt={text} />
            <p className={styles.text}>{text}</p>
        </div>
    );
};
