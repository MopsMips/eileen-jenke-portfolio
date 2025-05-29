import "./Legal.css";
import { useTranslation } from "react-i18next";

function Datenschutz() {
    const { t } = useTranslation();

    return (
        <main className="legal-page">
            <h1>{t("privacy.title")}</h1>

            <section>
                <h2>{t("privacy.generalTitle")}</h2>
                <p>{t("privacy.generalText")}</p>
            </section>

            <section>
                <h2>{t("privacy.dataCollectionTitle")}</h2>
                <p>{t("privacy.dataCollectionText")}</p>
            </section>

            <section>
                <h2>{t("privacy.rightsTitle")}</h2>
                <p>{t("privacy.rightsText")}</p>
            </section>

            <section>
                <h2>{t("privacy.contactTitle")}</h2>
                <p>
                    {t("privacy.contactText")}<br />
                    E-Mail: <a href="mailto:jenke.eileen@yahoo.com">jenke.eileen@yahoo.com</a>
                </p>
            </section>
        </main>
    );
}

export default Datenschutz;
