import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const InfiniteMarquee = ({ text, speed = 50 }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const textEl = textRef.current;

        if (!container || !textEl) return;

        // Clone text for seamless loop
        const clone = textEl.cloneNode(true);
        container.appendChild(clone);

        const width = textEl.offsetWidth;

        // Animate
        const animation = gsap.to([textEl, clone], {
            x: -width,
            duration: width / speed,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % width)
            }
        });

        return () => animation.kill();
    }, [text, speed]);

    return (
        <div className="w-full overflow-hidden whitespace-nowrap py-10 fade-mask">
            <div ref={containerRef} className="inline-flex gap-8">
                <span ref={textRef} className="text-[15vw] font-display font-black uppercase text-secondary/10 leading-none">
                    {text} {text}
                </span>
            </div>
        </div>
    );
};

export default InfiniteMarquee;
