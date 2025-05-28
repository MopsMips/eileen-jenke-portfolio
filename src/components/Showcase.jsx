import "./Showcase.css";
import ReactCompareImage from "react-compare-image";
import { Link } from "react-router-dom";

import beforeImage from "../assets/Before.png";
import afterImage from "../assets/After.png";

function Showcase() {
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
                <Link to="/showcase">Show More</Link>
            </div>
        </section>
    );
}

export default Showcase;
