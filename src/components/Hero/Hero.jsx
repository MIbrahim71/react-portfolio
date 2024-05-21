import React from "react";
import styles from "./Hero.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
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
          <a href="">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="">
            <img src={githubIcon} alt="" />
          </a>
          <a href="">
            <img src={linkedinIcon} alt="" />
          </a>
        </span>
        <p>Developer interested in UI and cloud</p>
        <a href={CV} target="_blank">
          <button>Resume</button>
        </a>
      </div>
      <a href="" className={styles.scroll}>
        ⬇️
      </a>
    </section>
  );
}
