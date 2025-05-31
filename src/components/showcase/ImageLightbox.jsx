import "./ImageLightbox.css";

function ImageLightbox({ image, alt, onClose }) {
    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                <img src={image} alt={alt} />
                <button className="lightbox-close" onClick={onClose}>×</button>
                <p className="lightbox-caption">{alt}</p>
            </div>
        </div>
    );
}

export default ImageLightbox;
