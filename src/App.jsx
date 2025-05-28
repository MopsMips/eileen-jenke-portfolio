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

import ShowcasePage from "./pages/ShowcasePage";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === null ? true : stored === "true";
  });

  const [language, setLanguage] = useState("en");

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(prev => !prev)}
        language={language}
        setLanguage={setLanguage}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero language={language} />
              <Skills language={language} />
              <Proficiency language={language} />
              <Projects language={language} />
              <Showcase language={language} />
              <ScrollToTop />
              <Experience language={language} />
              <Contact language={language} />
              <Footer language={language} />
            </>
          }
        />
        <Route path="/showcase" element={<ShowcasePage language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;
