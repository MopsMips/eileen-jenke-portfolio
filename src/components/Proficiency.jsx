import "./Proficiency.css";
import { motion } from "framer-motion";
import ratGif from "../assets/Rat.gif";

function Proficiency() {
    return (
        <section className="proficiency-section" id="proficiency">
            <div className="proficiency-layout">
                <div className="proficiency-text">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Tech + Creativity
                    </motion.h2>

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
                </div>

                <motion.div
                    className="proficiency-gif-wrapper"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src={ratGif} alt="Pixelratte mit Herz" className="proficiency-gif" />
                </motion.div>
            </div>
        </section>
    );
}

export default Proficiency;
