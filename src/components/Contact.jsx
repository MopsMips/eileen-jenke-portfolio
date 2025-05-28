import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
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
                {t("contact.title")}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
            >
                {t("contact.description")}
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
                    {t("contact.name")} <span className="required">*</span>
                </label>
                <input type="text" name="name" required />

                <label>
                    {t("contact.email")} <span className="required">*</span>
                </label>
                <input type="email" name="email" required />

                <label>
                    {t("contact.message")} <span className="required">*</span>
                </label>
                <textarea name="message" required />

                <button type="submit">{t("contact.submit")}</button>

                <p className="note">{t("contact.note")}</p>

                {status === "success" && (
                    <p className="form-feedback success">{t("contact.success")}</p>
                )}
                {status === "error" && (
                    <p className="form-feedback error">{t("contact.error")}</p>
                )}
            </motion.form>
        </section>
    );
}

export default Contact;
