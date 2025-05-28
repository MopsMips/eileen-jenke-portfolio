import "./Navbar.css";
import { useTranslation } from "react-i18next";

function Navbar({ darkMode, toggleDarkMode }) {
    const { i18n } = useTranslation();

    return (
        <nav className="navbar">
            <div className="logo">
                &lt; <span className="logo-name">Eileen Jenke</span> /&gt;
            </div>

            <ul className="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#showcase">Showcase</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="navbar-controls">
                <div className="language-switch">
                    <button
                        onClick={() => i18n.changeLanguage("de")}
                        className={i18n.language === "de" ? "active" : ""}
                        aria-label="Deutsch"
                    >
                        <img src="/flags/de.svg" alt="Deutsch" />
                    </button>
                    <span className="language-separator">|</span>
                    <button
                        onClick={() => i18n.changeLanguage("en")}
                        className={i18n.language === "en" ? "active" : ""}
                        aria-label="English"
                    >
                        <img src="/flags/gb.svg" alt="English" />
                    </button>
                </div>

                <div className="theme-switch">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;