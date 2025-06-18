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

                <div className="lightbox-media-wrapper">
                    <div className="lightbox-image-wrapper">
                        <button
                            className={`lightbox-nav left ${!hasPrev ? "invisible" : ""}`}
                            onClick={hasPrev ? onPrev : undefined}
                            aria-label="Previous"
                            disabled={!hasPrev}
                        >
                            ‹
                        </button>

                        <img src={image.src} alt={image.alt} />

                        <button
                            className={`lightbox-nav right ${!hasNext ? "invisible" : ""}`}
                            onClick={hasNext ? onNext : undefined}
                            aria-label="Next"
                            disabled={!hasNext}
                        >
                            ›
                        </button>

                        <p className="lightbox-caption">{image.alt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageLightbox;