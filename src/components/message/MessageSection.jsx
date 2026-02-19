import React from 'react';
import SignatureOverlay from './SignatureOverlay';
import InfiniteMarquee from './InfiniteMarquee';
import ManifestoText from './ManifestoText';
import { MapPin } from 'lucide-react';

const MessageSection = () => {
    return (
        <section className="relative bg-bg-dark text-white py-20 md:py-32 overflow-hidden">

            {/* Header */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="font-display font-bold text-neon-lime text-lg tracking-widest uppercase">Message from Lando</span>
                <div className="w-12 h-1 bg-neon-lime mx-auto mt-4"></div>
            </div>

            {/* Marquee Background */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full opacity-5 pointer-events-none">
                <InfiniteMarquee text="LANDO NORRIS FORMULA 1" speed={80} />
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="relative w-full max-w-2xl mx-auto aspect-[3/4] md:aspect-square bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-700 ease-out group">
                    {/* Portrait Image */}
                    <div className="absolute inset-0 bg-neutral-700 group-hover:scale-105 transition-transform duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1920&auto=format&fit=crop"
                            alt="Lando Norris Portrait"
                            className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                    </div>

                    <SignatureOverlay />

                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                        <div>
                            <h3 className="font-display text-4xl leading-none">LANDO</h3>
                            <h3 className="font-display text-4xl leading-none text-transparent stroke-text">NORRIS</h3>
                        </div>
                        <div className="flex items-center gap-2 text-neon-lime font-mono text-xs">
                            <MapPin size={14} />
                            <span>BRISTOL, UK</span>
                        </div>
                    </div>
                </div>
            </div>

            <ManifestoText />

        </section>
    );
};

export default MessageSection;
