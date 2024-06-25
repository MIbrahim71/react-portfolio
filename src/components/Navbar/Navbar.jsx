import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mouseMoved, setMouseMoved] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setMouseMoved(true);

      if (timer) {
        clearTimeout(timer);
      }

      const newTimer = setTimeout(() => {
        setMouseMoved(false);
      }, 2000);

      setTimer(newTimer);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  return (
    <>
      {mouseMoved && (
        <div className={styles.container}>
          <nav className={styles.nav}>
            <ul>
              <a href="#projects">
                <li>Projects</li>
              </a>
              <a href="#skills">
                <li>Skills</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
