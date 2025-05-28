import "./Projects.css";
import { FaStar, FaCodeBranch, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Projects() {
    const { t } = useTranslation();
    const projectData = t("projects.items", { returnObjects: true });

    return (
        <section className="projects-section" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                🚀 {t("projects.title")}
            </motion.h2>

            <div className="projects-grid">
                {projectData.map((proj, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3>
                            <FaBook style={{ marginRight: "0.5rem" }} /> {proj.name}
                        </h3>
                        <p>{proj.description}</p>

                        <div className="project-meta tech-line">🛠 {proj.tech}</div>

                        <div className="project-meta stat-line">
                            <span><FaCodeBranch /> {proj.forks}</span>
                            <span><FaStar /> {proj.stars}</span>
                            <span>{proj.size}</span>
                        </div>

                        <div className="project-link">
                            <a href={proj.link} target="_blank" rel="noreferrer">
                                {t("projects.view")}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="more-projects"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <a href="https://github.com/MopsMips" target="_blank" rel="noreferrer">
                    {t("projects.more")}
                </a>
            </motion.div>
        </section>
    );
}

export default Projects;