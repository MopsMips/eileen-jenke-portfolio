import "./Proficiency.css";
import { motion } from "framer-motion";

function Proficiency() {
    return (
        <section className="proficiency-section" id="proficiency">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Tech + Creativity
            </motion.h2>

            {/* 1. Creative & Community */}
            <motion.div
                className="skill"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <p>Creative & Community Work</p>
                <div className="progress">
                    <div className="bar" style={{ width: "95%" }}></div>
                </div>
            </motion.div>

            {/* 2. Frontend */}
            <motion.div
                className="skill"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>Frontend & UI Development</p>
                <div className="progress">
                    <div className="bar" style={{ width: "80%" }}></div>
                </div>
            </motion.div>

            {/* 3. Bots */}
            <motion.div
                className="skill"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
            >
                <p>Bot Development & Automation</p>
                <div className="progress">
                    <div className="bar" style={{ width: "75%" }}></div>
                </div>
            </motion.div>
        </section>
    );
}

export default Proficiency;
