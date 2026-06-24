import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./pages/Home";
import ScrollProgressBar from "./components/ScrollProgressBar";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <ScrollProgressBar />
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
