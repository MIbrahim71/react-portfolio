import { useEffect, useState } from "react";
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

import SmoothScroll from "smooth-scroll";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  const [showAnchor, setShowAnchor] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const nextSection = document.getElementById("projects");
      const rect = nextSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom >= 0;

      setShowAnchor(!inView);
    };

    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.section}>
      <Navbar />
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
      {showAnchor && (
        <a href="#projects" className={styles.scroll}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
              fill="#FFF"
            />
          </svg>
        </a>
      )}
    </section>
  );
}
