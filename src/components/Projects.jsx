import "./Projects.css";
import { FaStar, FaCodeBranch, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
    const projectData = [
        {
            name: "developerFolio",
            description: "🚀 Software Developer Portfolio Template that helps you showcase your work and skill.",
            stars: 5588,
            forks: 2899,
            size: "27.7 MB",
            tech: "JavaScript",
        },
        {
            name: "react-blog-github",
            description: "🔥 React + Github Issues 👉 Your Personal Blog",
            stars: 787,
            forks: 129,
            size: "34.7 MB",
            tech: "JavaScript",
        },
        {
            name: "awesome-web-components",
            description: "🤖 Awesome web components and snippets for every Front-End Developer",
            stars: 72,
            forks: 31,
            size: "2.1 MB",
            tech: "JavaScript",
        },
        {
            name: "Grocery-Items-Detection",
            description: "🎉 Grocery Items Detection using Tensorflow.js and IBM Watson.📸",
            stars: 39,
            forks: 11,
            size: "27 MB",
            tech: "JavaScript",
        },
        {
            name: "PWA-Olx-Clone",
            description: "Olx Clone Progressive Web App with Offline Feature, Messaging and Add to Favorite",
            stars: 26,
            forks: 18,
            size: "3.3 MB",
            tech: "JavaScript",
        },
        {
            name: "Locate-Me",
            description: "📍 A React Native live location application to find your loved one's",
            stars: 9,
            forks: 6,
            size: "32.2 MB",
            tech: "JavaScript",
        },
    ];

    return (
        <section className="projects-section" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Open Source Projects
            </motion.h2>

            <div className="projects-grid">
                {projectData.map((proj, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h3>
                            <FaBook style={{ marginRight: "0.5rem" }} /> {proj.name}
                        </h3>
                        <p>{proj.description}</p>
                        <div className="project-meta">
                            <span className="tech">🟡 {proj.tech}</span>
                            <span><FaCodeBranch /> {proj.forks}</span>
                            <span><FaStar /> {proj.stars}</span>
                            <span>{proj.size}</span>
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
                <a href="https://github.com/DEIN_GITHUB" target="_blank" rel="noreferrer">
                    MORE PROJECTS
                </a>
            </motion.div>
        </section>
    );
}

export default Projects;
