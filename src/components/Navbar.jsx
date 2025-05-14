import "./Navbar.css";

function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <nav className="navbar">
            <div className="logo">
                &lt; <span className="logo-name">Eileen Jenke</span> /&gt;
            </div>

            <ul className="nav-links">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

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
        </nav>
    );
}

export default Navbar;
