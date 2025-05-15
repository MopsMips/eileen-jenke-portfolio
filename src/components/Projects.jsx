import "./Projects.css";
import { FaStar, FaCodeBranch, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

const projectData = [
    {
        name: "My Portfolio",
        description: "🌐 My personal portfolio built with React, Vite, Framer Motion & GitHub Pages.",
        tech: "JavaScript, HTML, CSS",
        size: "3.5 MB",
        stars: 1,
        forks: 0,
        link: "https://github.com/MopsMips/eileen-jenke-portfolio",
    },
    {
        name: "Furify",
        description: "🎵 A Discord bot that adds furry-themed sound effects and moderation tools.",
        tech: "TypeScript, Discord.js",
        size: "8.7 MB",
        stars: 2,
        forks: 0,
        link: "https://github.com/MopsMips/Furify",
    },
    {
        name: "Pawsistant",
        description: "🤖 An assistant Discord bot for scheduling, commands and utility tools.",
        tech: "Python, Docker",
        size: "10.2 MB",
        stars: 2,
        forks: 0,
        link: "https://github.com/MopsMips/Pawsistant",
    },
];

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                🚀 My Projects
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

                        {/* 1. Zeile: Tech */}
                        <div className="project-meta tech-line">🛠 {proj.tech}</div>

                        {/* 2. Zeile: Forks / Stars / Size */}
                        <div className="project-meta stat-line">
                            <span><FaCodeBranch /> {proj.forks}</span>
                            <span><FaStar /> {proj.stars}</span>
                            <span>{proj.size}</span>
                        </div>

                        <div className="project-link">
                            <a href={proj.link} target="_blank" rel="noreferrer">
                                View on GitHub →
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
                    MORE PROJECTS
                </a>
            </motion.div>
        </section>
    );
}

export default Projects;
