import "./Skills.css";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDocker, FaPaintBrush,
} from "react-icons/fa";
import {
    SiTypescript, SiFigma, SiCanva, SiAdobephotoshop, SiAseprite, SiAdobeillustrator,
} from "react-icons/si";

function Skills() {
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
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                What I do
            </motion.h2>

            <motion.p
                className="skills-subtitle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Creative developer working at the intersection of code, design and community.
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
                <li>⚡ Built two Discord bots using Python and TypeScript — runs on a Raspberry Pi with Docker.</li>
                <li>⚡ Developed this portfolio with React, Vite, CSS, Framer Motion, and deployed via GitHub Pages.</li>
                <li>⚡ Create illustrations, UI assets, and visuals using Procreate, Photoshop, Aseprite & more.</li>
            </ul>
        </section>
    );
}

export default Skills;
