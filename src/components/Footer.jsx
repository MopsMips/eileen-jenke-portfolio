import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <p>{t("footer.text")}</p>
            <p>© 2025</p>
            <div className="footer-links">
                <a href="/impressum.html" target="_blank" rel="noopener noreferrer">
                    {t("footer.imprint")}
                </a>
                <span>|</span>
                <a href="/datenschutz.html" target="_blank" rel="noopener noreferrer">
                    {t("footer.privacy")}
                </a>
            </div>
        </footer>
    );
}

export default Footer;
