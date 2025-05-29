import "./Legal.css";
import { useTranslation } from "react-i18next";

function Impressum() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">
            <h1>{t("legal.impressumTitle")}</h1>

            <section>
                <h2>{t("legal.provider")}</h2>
                <p>
                    Eileen Jenke<br />
                    Musterstraße 12<br />
                    12345 Berlin<br />
                    Deutschland
                </p>
            </section>

            <section>
                <h2>{t("legal.contact")}</h2>
                <p>
                    Telefon: +49 123 456789<br />
                    E-Mail: <a href="mailto:jenke.eileen@yahoo.com">jenke.eileen@yahoo.com</a>
                </p>
            </section>

            <section>
                <h2>{t("legal.responsibility")}</h2>
                <p>
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                    Eileen Jenke<br />
                    Musterstraße 12<br />
                    12345 Berlin
                </p>
            </section>

            <section>
                <h2>{t("legal.disclaimer")}</h2>
                <p>{t("legal.disclaimerText")}</p>
            </section>
        </main>
    );
}

export default Impressum;
