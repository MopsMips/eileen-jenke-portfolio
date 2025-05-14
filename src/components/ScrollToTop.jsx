import { useState, useEffect } from "react";
import { FaHandPointer } from "react-icons/fa";
import "./ScrollToTop.css";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        function toggleVisibility() {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        isVisible && (
            <button className="scroll-to-top" onClick={scrollToTop}>
                <FaHandPointer />
            </button>
        )
    );
}

export default ScrollToTop;
