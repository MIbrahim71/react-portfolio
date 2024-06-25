import "./App.css";

import { ThemeProvider } from "./common/ThemeContext";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skill";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Projects />
      <Skill />
    </ThemeProvider>
  );
}

export default App;
