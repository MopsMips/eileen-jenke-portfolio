import "./Skills.css";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDocker, FaPaintBrush
} from "react-icons/fa";
import {
    SiTypescript, SiFigma, SiCanva, SiAdobephotoshop, SiAseprite, SiAdobeillustrator
} from "react-icons/si";
import eileenGif from "../assets/EileenAtWork.gif";
import { useTranslation } from "react-i18next";

function Skills() {
    const { t } = useTranslation();

    const skills = [
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <FaJs />, label: "JavaScript" },
        { icon: <SiTypescript />, label: "TypeScript" },
        { icon: <FaReact />, label: "React" },
        { icon: <FaPython />, label: "Python" },
        { icon: <FaDocker />, label: "Docker" },
        { icon: <SiFigma />, label: "Figma" },
        { icon: <SiCanva />, label: "Canva" },
        { icon: <SiAdobephotoshop />, label: "Photoshop" },
        { icon: <SiAdobeillustrator />, label: "Illustrator" },
        { icon: <FaPaintBrush />, label: "Procreate" },
        { icon: <SiAseprite />, label: "Aseprite" }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-layout">
                <motion.img
                    src={eileenGif}
                    alt="Eileen at desk"
                    className="skills-image"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                />

                <div className="skills-text">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="skills-heading"
                    >
                        {t("skills.title")}
                    </motion.h2>

                    <motion.p
                        className="skills-subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {t("skills.subtitle")}
                    </motion.p>

                    <motion.div
                        className="skills-icons"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {skills.map((skill, index) => (
                            <div className="icon-with-label" key={index}>
                                {skill.icon}
                                <span>{skill.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    <ul className="skills-bullets">
                        <li>{t("skills.bullets.0")}</li>
                        <li>{t("skills.bullets.1")}</li>
                        <li>{t("skills.bullets.2")}</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
