import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [mouseMoved, setMouseMoved] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setMouseMoved(true);

      // if (timer) {
      //   clearTimeout(timer);
      // }

      // const newTimer = setTimeout(() => {
      //   setMouseMoved(false);
      // }, 2000);

      // setTimer(newTimer);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      // if (timer) {
      //   clearTimeout(timer);
      // }
    };
  }, []);

  return (
    <>
      {mouseMoved && (
        <nav className={styles.nav}>
          <ul>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
            <li>CV</li>
          </ul>
        </nav>
      )}
    </>
  );
}
