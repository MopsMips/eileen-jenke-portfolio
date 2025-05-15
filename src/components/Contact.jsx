import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formsubmit.co/jenke.eileen@yahoo.com", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="contact-section" id="contact">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                Say hi 👋
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
            >
                Let’s talk design, code, or anything in between. I’d love to hear from you!
            </motion.p>

            <motion.form
                className="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <label>
                    Your Name <span className="required">*</span>
                </label>
                <input type="text" name="name" required placeholder="" />

                <label>
                    Your Email <span className="required">*</span>
                </label>
                <input type="email" name="email" required placeholder="" />

                <label>
                    Your Message <span className="required">*</span>
                </label>
                <textarea name="message" required placeholder="" />

                <button type="submit">Send Message</button>

                <p className="note">* Required fields</p>

                {status === "success" && (
                    <p className="form-feedback success">✅ Your message has been sent. Thank you!</p>
                )}
                {status === "error" && (
                    <p className="form-feedback error">❌ Something went wrong. Please try again.</p>
                )}
            </motion.form>
        </section>
    );
}

export default Contact;
