import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

function Navbar({ darkMode, toggleDarkMode, isLegalPage }) {
    const { t, i18n } = useTranslation();

    return (
        <nav className="navbar">
            <div className="logo">
                &lt; <span className="logo-name">Eileen Jenke</span> /&gt;
            </div>

            {!isLegalPage && (
                <ul className="nav-links">
                    <li>
                        <Link to="skills" smooth={true} duration={500} offset={-70}>
                            {t("nav.skills")}
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} offset={-70}>
                            {t("nav.projects")}
                        </Link>
                    </li>
                    <li>
                        <Link to="showcase" smooth={true} duration={500} offset={-70}>
                            {t("nav.showcase")}
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500} offset={-70}>
                            {t("nav.experience")}
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} offset={-70}>
                            {t("nav.contact")}
                        </Link>
                    </li>
                </ul>
            )}

            <div className="navbar-controls">
                <div className="language-switch">
                    <button
                        onClick={() => i18n.changeLanguage("de")}
                        className={i18n.language === "de" ? "active" : ""}
                        aria-label="Deutsch"
                    >
                        <img src={`${import.meta.env.BASE_URL}flags/de.svg`} alt="Deutsch" />
                    </button>
                    <span className="language-separator">|</span>
                    <button
                        onClick={() => i18n.changeLanguage("en")}
                        className={i18n.language === "en" ? "active" : ""}
                        aria-label="English"
                    >
                        <img src={`${import.meta.env.BASE_URL}flags/gb.svg`} alt="English" />
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