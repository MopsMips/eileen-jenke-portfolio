import "./Showcase.css";
import ReactCompareImage from "react-compare-image";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import beforeImage from "../assets/Before.png";
import afterImage from "../assets/After.png";

function Showcase() {
    const { t } = useTranslation();

    return (
        <section id="showcase" className="before-after-section">
            <h2>{t("showcase.title")}</h2>
            <p>{t("showcase.subtitle")}</p>

            <div className="slider-container">
                <ReactCompareImage
                    leftImage={beforeImage}
                    rightImage={afterImage}
                    sliderLineColor="#ffffff"
                />
            </div>

            <div className="more-projects">
                <Link to="/showcase">{t("showcase.more")}</Link>
            </div>
        </section>
    );
}

export default Showcase;
