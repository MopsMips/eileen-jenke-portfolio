import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Proficiency from "./components/Proficiency";
import Projects from "./components/Projects";
import Showcase from "./components/Showcase";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import ShowcasePage from "./pages/ShowcasePage";

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

  return (
    <Router>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(prev => !prev)}
      />

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
        <Route
          path="/showcase"
          element={
            <>
              <ShowcasePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/impressum"
          element={
            <>
              <Impressum />
              <Footer />
            </>
          }
        />
        <Route
          path="/datenschutz"
          element={
            <>
              <Datenschutz />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;