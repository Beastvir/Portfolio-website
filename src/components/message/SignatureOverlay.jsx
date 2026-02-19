import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SignatureOverlay = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path) return;

        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        ScrollTrigger.create({
            trigger: path,
            start: "top 80%",
            onEnter: () => {
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 2.5,
                    ease: "power2.out"
                });
            }
        });
    }, []);

    return (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-difference">
            <svg width="600" height="400" viewBox="0 0 600 400" className="w-[80vw] md:w-[600px]">
                {/* Placeholder Signature Path - Replace with actual SVG path */}
                <path
                    ref={pathRef}
                    d="M50,200 C150,100 250,300 350,200 S550,100 550,300"
                    fill="none"
                    stroke="#CCFF00"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

export default SignatureOverlay;
