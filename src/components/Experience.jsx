import "./Experience.css";
import { motion } from "framer-motion";
import { FaPaintBrush, FaRobot, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Experience() {
    const { t } = useTranslation();

    const experiences = t("experience.items", { returnObjects: true });

    return (
        <section className="experience-section" id="experience">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {t("experience.title")}
            </motion.h2>

            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        className="timeline-item"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-icon">
                            {exp.icon === "globe" && <FaGlobe />}
                            {exp.icon === "robot" && <FaRobot />}
                            {exp.icon === "paint" && <FaPaintBrush />}
                        </div>
                        <div className="timeline-content">
                            <h3>{exp.title}</h3>
                            <span className="org">{exp.org}</span>
                            <span className="location">{exp.location}</span>
                            <p>{exp.description}</p>
                            <span className="tools">{exp.tools}</span>
                            {exp.link && (
                                <a
                                    className="experience-link"
                                    href={exp.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("experience.linkText")}
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Experience;