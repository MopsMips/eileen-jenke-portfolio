import "./AboutMe.css";
import { motion } from "framer-motion";
import profilbild from "../assets/Eileen.JPEG";
function AboutMe() {
    return (
        <section className="about-section" id="about">
            <motion.div
                className="profile-pic-wrapper"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img src={profilbild} alt="Eileen" className="profile-pic" />
            </motion.div>
        </section>
    );
}

export default AboutMe;
