import "./ShowcasePage.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ShowcaseFilterGallery from "../components/showcase/ShowcaseFilterGallery";

function ShowcasePage() {
    const { t } = useTranslation();

    return (
        <div className="showcase-page">
            <h1>Full Showcase</h1>
            <p>Browse by category: Logos, Emotes, Overlays…</p>

            <ShowcaseFilterGallery />

            <div className="back-link-wrapper">
                <Link to="/" className="back-home">
                    ← {t("back.home")}
                </Link>
            </div>
        </div>
    );
}

export default ShowcasePage;