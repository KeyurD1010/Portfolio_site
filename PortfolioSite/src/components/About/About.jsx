import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <div className={styles.aboutItems}>
          <p className={styles.aboutItemText}>
            I'm currently finishing my M.Tech with a focus on train and build
            machine learning models and enhance my web devlopment as well,
            aiming to develop digital solutions that are both accessible and
            centered on the user. I hold a Bachelor of Technology in Information
            Technology from Dharmsinh Desai University (DDU) and I am pursuing
            an M.Tech in Information and Communication Technology, specializing
            in Machine Learning, at the Dhirubhai Ambani Institute of
            Information and Communication Technology (DA-IICT). My academic
            background and work experiences demonstrate my dedication to
            developing digital solutions that promote human engagement and
            inclusiveness. At Upstatement, I am harnessing my expertise to
            advance product accessibility and enhance user interaction.
          </p>
        </div>
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
};
