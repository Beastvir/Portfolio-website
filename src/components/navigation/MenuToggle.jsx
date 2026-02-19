import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MenuToggle = ({ isOpen, onClick }) => {
    const topRef = useRef(null);
    const midRef = useRef(null);
    const botRef = useRef(null);
    const tl = useRef(null);

    useEffect(() => {
        tl.current = gsap.timeline({ paused: true, defaults: { duration: 0.4, ease: 'power2.inOut' } })
            .to(topRef.current, { y: 9, rotate: 45 }, 0)
            .to(midRef.current, { scaleX: 0, opacity: 0 }, 0)
            .to(botRef.current, { y: -9, rotate: -45 }, 0);

        return () => {
            tl.current?.kill();
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [isOpen]);

    return (
        <button
            onClick={onClick}
            className="relative w-12 h-12 flex flex-col justify-center items-center gap-[7px] z-[110] group"
            aria-label="Toggle Menu"
        >
            <div
                ref={topRef}
                className="w-8 h-[2px] bg-black group-hover:bg-neon-lime transition-colors duration-300"
            />
            <div
                ref={midRef}
                className="w-8 h-[2px] bg-black group-hover:bg-neon-lime transition-colors duration-300"
            />
            <div
                ref={botRef}
                className="w-8 h-[2px] bg-black group-hover:bg-neon-lime transition-colors duration-300"
            />
        </button>
    );
};

export default MenuToggle;
