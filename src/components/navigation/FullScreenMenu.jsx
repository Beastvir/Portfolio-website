import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FullScreenMenu = ({ isOpen, onClose }) => {
    const containerRef = useRef(null);
    const linksRef = useRef([]);

    useEffect(() => {
        if (isOpen) {
            // Disable scroll
            document.body.style.overflow = 'hidden';

            gsap.to(containerRef.current, {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 0.8,
                ease: 'power4.inOut'
            });

            gsap.fromTo(linksRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.3, ease: 'power3.out' }
            );
        } else {
            // Enable scroll
            document.body.style.overflow = '';

            gsap.to(containerRef.current, {
                clipPath: 'inset(0% 0% 100% 0%)',
                duration: 0.8,
                ease: 'power4.inOut'
            });
        }
    }, [isOpen]);

    const navItems = ['HOME', 'ON TRACK', 'OFF TRACK', 'CALENDAR'];

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-bg-dark z-[100] grid grid-cols-1 md:grid-cols-[40%_60%] clip-path-inset-bottom"
            style={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        >
            {/* Left Column - Images */}
            <div className="hidden md:grid grid-cols-2 grid-rows-2 h-full border-r border-white/10">
                <div className="bg-neutral-800 border-r border-b border-white/10"></div>
                <div className="bg-neutral-900 border-b border-white/10"></div>
                <div className="bg-neutral-900 border-r border-white/10"></div>
                <div className="bg-neutral-800"></div>
            </div>

            {/* Right Column - Nav */}
            <div className="flex flex-col justify-center px-8 md:px-24 h-full relative">
                <nav className="flex flex-col gap-4">
                    {navItems.map((item, index) => (
                        <a
                            key={item}
                            href="#"
                            className="text-[12vw] md:text-[8vh] font-display font-bold text-white leading-none hover:text-neon-lime transition-colors duration-300 uppercase tracking-tighter"
                            ref={el => linksRef.current[index] = el}
                            onClick={onClose}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="absolute bottom-12 left-8 md:left-24 flex gap-8 text-neutral-400 font-body text-sm uppercase tracking-widest">
                    <a href="#" className="hover:text-neon-lime transition-colors">Instagram</a>
                    <a href="#" className="hover:text-neon-lime transition-colors">TikTok</a>
                    <a href="#" className="hover:text-neon-lime transition-colors">YouTube</a>
                </div>
            </div>
        </div>
    );
};

export default FullScreenMenu;
