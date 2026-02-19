import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ManifestoText = () => {
    const containerRef = useRef(null);
    const wordsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(wordsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            }
        );
    }, []);

    const text = "REDEFINING what it means to be a racing driver. Building a LEGACY on and off the track. Pure speed, unfiltered passion, and a drive to WIN.";
    const words = text.split(" ");

    return (
        <div className="max-w-4xl mx-auto px-6 text-center py-24" ref={containerRef}>
            <p className="font-body text-xl md:text-3xl leading-relaxed text-secondary/80">
                {words.map((word, i) => {
                    const isHighlight = ["REDEFINING", "LEGACY", "WIN."].includes(word);
                    return (
                        <span
                            key={i}
                            ref={el => wordsRef.current[i] = el}
                            className={`inline-block mr-2 ${isHighlight ? 'text-neon-lime font-bold' : ''}`}
                        >
                            {word}
                        </span>
                    );
                })}
            </p>
        </div>
    );
};

export default ManifestoText;
