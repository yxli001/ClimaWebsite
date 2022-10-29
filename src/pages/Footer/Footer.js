import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.left}>
        <div className={styles.email}>
          <a
            className={styles.link}
            href="mailto:climamobileapp@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </div>
        <div className={styles.privacy}>
          <a
            className={styles.link}
            href="https://clima-privacy-policy.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy
          </a>
        </div>
      </div>
      <div className={styles.copyright}>&copy; 2022 Clima</div>
    </div>
  );
};

export default Footer;
