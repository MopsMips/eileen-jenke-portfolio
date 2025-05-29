import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

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

function LayoutWrapper({ children, darkMode, toggleDarkMode }) {
  const location = useLocation();
  const { t } = useTranslation();

  const isLegalPage =
    location.pathname === "/impressum" || location.pathname === "/datenschutz";

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isLegalPage={isLegalPage}
      />

      {isLegalPage && (
        <div className="back-link-wrapper">
          <Link to="/" className="back-home">
            ← {t("back.home")}
          </Link>
        </div>
      )}

      {children}
    </>
  );
}

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
      <LayoutWrapper
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
      >
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
                <Contact />
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
      </LayoutWrapper>
    </Router>
  );
}

export default App;