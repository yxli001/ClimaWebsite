import React from "react";

import styles from "./Locations.module.css";
import { locationData } from "./location.data";
import { Location } from "./Location.component";

const Locations = () => {
    return (
        <div className={styles.locationContainer}>
            <h1 className={styles.title}>
                Help the environment, whenever, wherever
            </h1>
            <div className={styles.locationsContainer}>
                {locationData.map((location, index) => {
                    return (
                        <Location
                            text={location.text}
                            image={location.image}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Locations;
