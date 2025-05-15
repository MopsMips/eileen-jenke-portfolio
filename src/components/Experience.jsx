import "./Experience.css";
import { motion } from "framer-motion";
import { FaPaintBrush, FaRobot, FaGlobe } from "react-icons/fa";

const experiences = [
    {
        icon: <FaPaintBrush />,
        title: "Creative Contributor",
        org: "University Esports Berlin",
        location: "Berlin · since 2024",
        description: "Designs, illustrations & content for Discord, events and social media. Custom emojis, graphics and brand visuals.",
        tools: "Photoshop, Illustrator, Canva, Clip Studio Paint, ProCreate"
    },
    {
        icon: <FaRobot />,
        title: "Bot Developer",
        org: "Discord Automation Projects",
        location: "Open Source · since 2025",
        description: "Built 2 Discord bots (Furify, Pawsistant) using TypeScript & Python.",
        tools: "TypeScript, Python, Docker, Raspberry Pi, Discord"
    },
    {
        icon: <FaGlobe />,
        title: "Web Portfolio",
        org: "Personal Project",
        location: "Remote · 2025",
        description: "Designed and developed my portfolio site with animations, dark mode and responsive layout.",
        tools: "React, Vite, HTML, JavaScipt, CSS, Framer Motion, GitHub Pages"
    },
    {
        icon: <FaPaintBrush />,
        title: "Pixel Artist & Animator",
        org: "SCP-1881 (in development)",
        location: "Remote · since 2023",
        description:
            "Currently working on an arcade-style pixelart game inspired by SCP lore. Responsible for sprites, character animations and visual style.",
        tools: "Aseprite, ProCreate"
    },

    {
        icon: <FaPaintBrush />,
        title: "Game Art & UI Design",
        org: "SCP: Observer (Steam)",
        location: "Remote · 2022–2023",
        description:
            "Created art assets, UI elements and textures for the indie horror game SCP: Observer. Contributed to visual style and game interface.",
        tools: "Trello, Clip Studio Paint",
        link: "https://store.steampowered.com/app/1738710/SCP_Observer/"
    },
    {
        icon: <FaPaintBrush />,
        title: "Social & Visual Designer",
        org: "Berlin-Brandenburg Esports",
        location: "Berlin · 2021–2024",
        description:
            "Visual identity, website graphics and social media content for local esports organization. Designed assets for streams, tournaments and community.",
        tools: "Photoshop, Canva, Illustrator, Figma, Discord"
    },
    {
        icon: <FaPaintBrush />,
        title: "Stream Design & Tournament Support",
        org: "Twitch Collaboration",
        location: "Remote · 2021-2022",
        description:
            "Created full stream design assets including emotes, overlays and offline screens. Co-hosted and organized osu! tournaments with a Twitch streamer.",
        tools: "Photoshop, Clip Studio Paint, Discord, OBS Assets"
    }


];

function Experience() {
    return (
        <section className="experience-section" id="experience">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Experience
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
                        <div className="timeline-icon">{exp.icon}</div>
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
                                    View Project →
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