import React from "react";

import styles from "./Home.module.css";
import environment from "../../assets/images/environment.jpg";
import arrow from "../../assets/images/arrow.png";
import homePageSS from "../../assets/images/home-page-ss.png";
import appStore from "../../assets/svgs/appstore.svg";
import googlePlay from "../../assets/svgs/googleplay.svg";

const Home = () => {
    return (
        <div className={styles.homePageContainer}>
            <div
                className={styles.backgroundImage}
                style={{
                    backgroundImage: `url(${environment})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
            <div className={styles.contentContainer}>
                <div
                    className={`${styles.left} animate__animated animate__fadeInLeft`}
                >
                    <div className={styles.content}>
                        <h1 className={styles.header}>Clima</h1>
                        <h2 className={styles.subHeader}>
                            Gamify reductions in carbon emissions
                        </h2>
                        <div className={styles.downloadImages}>
                            <a href="#">
                                <img
                                    src={appStore}
                                    alt="Download on app store"
                                    className={styles.download}
                                />
                            </a>
                            <a href="#">
                                <img
                                    src={googlePlay}
                                    alt="Download on app store"
                                    className={styles.download}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={`${styles.right} animate__animated animate__fadeInRight`}
                >
                    <img
                        src={homePageSS}
                        alt="App home page"
                        className={styles.phone}
                    />
                </div>
            </div>

            <a
                className={`${styles.downButton} animate__animated animate__pulse`}
                href="#benefits"
            >
                <img
                    className={styles.downArrow}
                    src={arrow}
                    alt="Go to Features"
                />
            </a>
        </div>
    );
};

export default Home;
