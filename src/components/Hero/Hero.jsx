import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Keyur Dhanani</h1>
        <p className={styles.description}>
          I'm a machine learning and full-stack developer with experience in
          various Python and JavaScript libraries. Feel free to reach out if
          you'd like to learn more!!!
        </p>
        <a
          href="mailto:keyurdhanani456@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      {/* <div className={styles.hero_img}> */}
      <img
        src={getImageUrl("hero/me.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* </div> */}

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
