import "./ShowcasePage.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ShowcasePage() {
    const { t } = useTranslation();

    return (
        <div className="showcase-page">
            <h1>Full Showcase</h1>
            <p>Explore all design transformations and visual comparisons in one place.</p>

            {/* Platzhalter für spätere Galerie */}
            <div className="gallery-placeholder">
                <p>Coming soon: A full gallery of images and transformations ✨</p>
            </div>
        </div>
    );
}

export default ShowcasePage;
