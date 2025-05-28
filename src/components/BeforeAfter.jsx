import "./BeforeAfter.css";
import ReactCompareImage from "react-compare-image";

import beforeImage from "../assets/Before.png";
import afterImage from "../assets/After.png";

function BeforeAfter() {
    return (
        <section id="showcase" className="before-after-section">
            <h2>Showcase</h2>
            <p>Move the slider to see the transformation ✨</p>

            <div className="slider-container">
                <ReactCompareImage
                    leftImage={beforeImage}
                    rightImage={afterImage}
                    sliderLineColor="#ffffff"
                />
            </div>

            <div className="more-projects">
                <a
                    href="https://your-external-gallery.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Show More
                </a>
            </div>
        </section>
    );
}

export default BeforeAfter;
