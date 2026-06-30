import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./pages/Home";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Privacy from "./pages/Privacy";
import TermService from "./pages/TermService";
import Elements from "./pages/Elements";
import Footer from "./components/Footer";
import About from "./pages/About";
import MobileCTA from "./components/MobileCTA";
import BackToTop from "./components/BackToTop";
import WorkSection from "./sections/WorkSection";
import Testimonials from "./pages/Testinomials";
import Quote from "./pages/Quote";
import Areas from "./pages/Areas";
import Service from "./pages/Service";

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
        <Route path="/terms" element={<TermService />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/about" element={<About />} />
        <Route path="/#work" element={<WorkSection />} />
        <Route path="/#area" element={<Areas />} />
        <Route path="/#testimonial" element={<Testimonials />} />
        <Route path="/#quote" element={<Quote />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <BackToTop />
      <Footer />

      <MobileCTA />
    </>
  );
}

export default App;
