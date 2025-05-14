import "./Skills.css";
import { motion } from "framer-motion";
import {
    FaHtml5, FaCss3Alt, FaSass, FaJs, FaReact, FaNodeJs,
    FaPython, FaAws, FaDocker
} from "react-icons/fa";
import {
    SiFirebase, SiMongodb, SiNpm, SiSwift, SiPostgresql
} from "react-icons/si";

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                What I do
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Creative developer with a passion for code, design, and building tools for communities.
            </motion.p>

            <motion.div
                className="skills-icons"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <FaSass title="Sass" />
                <FaJs title="JavaScript" />
                <FaReact title="ReactJS" />
                <FaNodeJs title="NodeJS" />
                <SiSwift title="Swift" />
                <SiNpm title="npm" />
                <SiPostgresql title="SQL" />
                <FaAws title="AWS" />
                <SiFirebase title="Firebase" />
                <FaPython title="Python" />
                <FaDocker title="Docker" />
                <SiMongodb title="MongoDB" />
            </motion.div>
        </section>
    );
}

export default Skills;
