import React from "react";

import styles from "./Benefits.module.css";
import { benefits } from "./Benefits.data";
import { Benefit } from "./Benefit.component";

const Benefits = () => {
    return (
        <div className={styles.benefitsContainer} id="benefits">
            <h1 className={styles.title}>
                Clima is an app that makes saving the environment fun
            </h1>
            <div className={styles.benefitsList}>
                {benefits.map((benefit, index) => {
                    return (
                        <Benefit
                            text={benefit.text}
                            image={benefit.image}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Benefits;
