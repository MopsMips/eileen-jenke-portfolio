import "./ImageLightbox.css";

function ImageLightbox({ images, currentIndex, onClose, onPrev, onNext }) {
    if (currentIndex === null || !images || images.length === 0) return null;

    const image = images[currentIndex];
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < images.length - 1;

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <button className="lightbox-close" onClick={onClose} aria-label="Close">
                    ×
                </button>
                {hasPrev && (
                    <button className="lightbox-nav left" onClick={onPrev} aria-label="Previous">
                        ‹
                    </button>
                )}
                <img src={image.src} alt={image.alt} />
                {hasNext && (
                    <button className="lightbox-nav right" onClick={onNext} aria-label="Next">
                        ›
                    </button>
                )}
                <p>{image.alt}</p>
            </div>
        </div>
    );
}

export default ImageLightbox;