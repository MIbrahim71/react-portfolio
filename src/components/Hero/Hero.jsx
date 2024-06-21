import React from "react";
import styles from "./Hero.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import instagramLight from "../../assets/instagram-light.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import { useTheme } from "../../common/ThemeContext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section className={styles.container}>
      <img
        src={themeIcon}
        alt="themeIcon"
        className={styles.themeImg}
        onClick={toggleTheme}
      />
      <div className={styles.info}>
        <h1>Muhammad Ibrahim</h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://www.instagram.com/ibrcodes/" target="_blank">
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className={styles.igIcon}
            />
          </a>
          <a href="https://github.com/MIbrahim71" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-i/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        {/* <p>Developer interested in UI and cloud</p> */}
        {/* <a href="https://flowcv.com/resume/lpua8c8cdd" target="_blank">
          <button>Resume</button>
        </a> */}
      </div>
      {/* <a href="" className={styles.scroll}>
        ⬇️
      </a> */}
    </section>
  );
}
