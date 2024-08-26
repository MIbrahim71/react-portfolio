import "./App.css";

import { ThemeProvider } from "./common/ThemeContext";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skill";

function App() {
  return (
    <ThemeProvider>
      <Hero />
      <Projects />
      <Skill />
    </ThemeProvider>
  );
}

export default App;
