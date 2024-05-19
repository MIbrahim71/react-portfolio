import React from "react";
import "./Hero.module.css";
import heroImg from "../../assets/Design uten navn.png";
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
  const [theme, toggleTheme] = useTheme();

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section>
      <div>
        <h1>
          Muhammad <br /> Ibrahim
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
          <a href="">
            <img src="" alt="" />
          </a>
        </span>
        <p>Developer interested in UI and cloud</p>
        <a href="">
          <button onClick={toggleTheme}>Resume</button>
        </a>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
}
