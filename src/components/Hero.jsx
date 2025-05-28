import "./Hero.css";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import profilbild from "../assets/Eileen.JPEG";
import { FaDiscord } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h1>
                        {t("hero.greeting", { name: "Eileen" })}
                        <span className="wave">👋</span>
                    </h1>
                    <p className="subtitle">
                        {t("hero.subtitle")}
                    </p>
                    <div className="social-links">
                        <a href="https://github.com/MopsMips"><FaGithub /></a>
                        <a href="https://linkedin.com/in/eileen-jenke"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/eileen.jenke"><FaInstagram /></a>
                        <a href="https://x.com/Miss_Mops"><FaXTwitter /></a>
                    </div>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn">{t("hero.contact")}</a>
                        <a
                            href="https://discord.gg/6dzteBrQyg"
                            className="btn secondary btn-discord"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t("hero.discord")} <FaDiscord className="icon-right" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src={profilbild} alt="Eileen" />
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
