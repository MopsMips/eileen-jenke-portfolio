import "./Navbar.css";

function Navbar({ darkMode, toggleDarkMode, language, setLanguage }) {
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
                        onClick={() => setLanguage("de")}
                        className={language === "de" ? "active" : ""}
                        aria-label="Deutsch"
                    >
                        <img src="/flags/de.svg" alt="DE" />
                    </button>
                    <span className="language-separator">|</span>
                    <button
                        onClick={() => setLanguage("en")}
                        className={language === "en" ? "active" : ""}
                        aria-label="English"
                    >
                        <img src="/flags/gb.svg" alt="EN" />
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
