import Header from "./components/Header/Header";
import "./App.css";
import Home from "./components/Header/Home/Home";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
