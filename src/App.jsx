import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Proficiency from "./components/Proficiency";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase"; // vorher: BeforeAfter
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import ShowcasePage from "./pages/ShowcasePage"; // eigene Seite für vollständige Galerie

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === null ? true : stored === "true";
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Skills />
              <Proficiency />
              <Projects />
              <Showcase />
              <ScrollToTop />
              <Experience />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/showcase" element={<ShowcasePage />} />
      </Routes>
    </Router>
  );
}

export default App;