import styles from "./Skills.module.css";
import { skills } from "../../common/skillList";

import React from "react";

export default function Skill() {
  return (
    <div id="skills" className={styles.section}>
      <h1>Skills</h1>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
}
