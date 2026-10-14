import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0, }){
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
        ref={elementRef}
        style={{
            transitionDelay: `${delay}ms`,
        }}
        className={`transition-all duration-1000 ease-out ${
            isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        } ${className}`}
        >
            {children}
        </div>
    );
}

export default Reveal;