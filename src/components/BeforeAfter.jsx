import "./BeforeAfter.css";
import ReactCompareImage from "react-compare-image";

import beforeImage from "../assets/before.jpg";
import afterImage from "../assets/after.jpg";

function BeforeAfter() {
    return (
        <section id="beforeafter" className="before-after-section">
            <h2>Before / After</h2>
            <p>Move the slider to see the transformation ✨</p>
            <div className="slider-container">
                <ReactCompareImage
                    leftImage={beforeImage}
                    rightImage={afterImage}
                    sliderLineColor="#ffffff"
                />
            </div>
        </section>
    );
}

export default BeforeAfter;
