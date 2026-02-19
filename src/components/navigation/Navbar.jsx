import React, { useState, useEffect } from 'react';
import StoreButton from './StoreButton';
import MenuToggle from './MenuToggle';
import FullScreenMenu from './FullScreenMenu';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-light/80 backdrop-blur-md py-4 border-b border-black/5' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                    {/* Left Logo */}
                    <a href="/" className="flex flex-col leading-[0.85] z-[110] relative group">
                        <span className="font-display font-black text-2xl md:text-3xl tracking-tighter group-hover:text-neon-lime transition-colors">LANDO</span>
                        <span className="font-display font-black text-2xl md:text-3xl tracking-tighter group-hover:text-neon-lime transition-colors">NORRIS</span>
                    </a>

                    {/* Center Monogram (Fades in on scroll) */}
                    <div
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 hidden md:block ${isScrolled ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <span className="font-display font-black text-3xl">LN</span>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <StoreButton />
                        </div>
                        <MenuToggle isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                    </div>
                </div>
            </header>

            <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    );
};

export default Navbar;
