import "./ImageLightbox.css";

function ImageLightbox({ image, onClose }) {
    if (!image) return null;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
                <img src={image.src} alt={image.alt} />
                <p>{image.alt}</p>
            </div>
        </div>
    );
}

export default ImageLightbox;
