import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./pages/Home";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Privacy from "./pages/Privacy";
import Service from "./pages/Service";
import Elements from "./pages/Elements";
import Footer from "./components/Footer";
import About from "./pages/About";

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
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollProgressBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Service />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
