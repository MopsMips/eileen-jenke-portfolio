import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>Made with ❤️ by myself
            </p>
            <p>© 2025</p>
            <div className="footer-links">
                <a href="/impressum.html" target="_blank" rel="noopener noreferrer">Impressum</a>
                <span>|</span>
                <a href="/datenschutz.html" target="_blank" rel="noopener noreferrer">Datenschutz</a>
            </div>
        </footer>
    );
}

export default Footer;
