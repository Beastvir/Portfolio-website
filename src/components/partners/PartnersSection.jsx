import React from 'react';
import InfiniteMarquee from '../message/InfiniteMarquee'; // Reuse marquee

const PartnersSection = () => {
    return (
        <section className="bg-bg-light py-24 border-t border-black/5">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="font-display text-4xl uppercase mb-4">Partners & Campaigns</h2>
                <p className="font-body text-neutral-500 max-w-2xl mx-auto">Collaborating with world-class brands to push boundaries.</p>
            </div>

            <div className="flex flex-col gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <InfiniteMarquee text="MCLAREN OKX ANDROID GOOGLE CHROME MONSTER ENERGY BELL QUAD LOCK TUMI" speed={30} />
                <InfiniteMarquee text="ALIENWARE DELL TECHNOLOGIES CISCO DARKTRACE HILTON JACK DANIELS PIRELLI" speed={40} />
            </div>
        </section>
    );
};

export default PartnersSection;
