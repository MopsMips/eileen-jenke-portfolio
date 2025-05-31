import { useState } from "react";
import "./ShowcaseFilterGallery.css";
import ImageLightbox from "./ImageLightbox";

import FurifyIcon from "../../assets/showcase/logos/Furify_Icon.png";
import PawsistantIcon from "../../assets/showcase/logos/Pawsistant_Icon.png";
import TempTempIcon from "../../assets/showcase/logos/TempTemp_Icon.png";

const showcaseItems = [
    {
        category: "Logos",
        src: FurifyIcon,
        title: "Furify",
        subtitle: "Discord Bot Logo",
    },
    {
        category: "Logos",
        src: PawsistantIcon,
        title: "Pawsistant",
        subtitle: "Discord Bot Logo",
    },
    {
        category: "Logos",
        src: TempTempIcon,
        title: "TempTemp",
        subtitle: "Experimental Project by Julian",
    },
];

const categories = ["All", ...new Set(showcaseItems.map((item) => item.category))];

function ShowcaseFilterGallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems =
        activeCategory === "All"
            ? showcaseItems
            : showcaseItems.filter((item) => item.category === activeCategory);

    return (
        <section className="filter-gallery">
            <div className="filter-buttons">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={cat === activeCategory ? "active" : ""}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="gallery-grid">
                {filteredItems.map((item, index) => (
                    <div
                        className="gallery-card"
                        key={index}
                        onClick={() => setSelectedImage({ src: item.src, alt: item.title })}
                    >
                        <img src={item.src} alt={item.title} />
                        <div className="overlay">
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>

            <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
        </section>
    );
}

export default ShowcaseFilterGallery;