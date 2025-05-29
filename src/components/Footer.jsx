import "./Footer.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>{t("footer.text")}</p>
            <p>© 2025</p>
            <div className="footer-links">
                <Link to="/impressum">{t("footer.imprint")}</Link>
                <span>|</span>
                <Link to="/datenschutz">{t("footer.privacy")}</Link>
            </div>
        </footer>
    );
}

export default Footer;
