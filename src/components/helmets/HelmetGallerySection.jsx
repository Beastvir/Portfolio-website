import React from 'react';

const HelmetCard = ({ year, name, theme, image }) => (
    <div className="aspect-square bg-neutral-900 rounded-3xl border border-white/10 p-6 relative group overflow-hidden cursor-pointer">
        <div className="absolute inset-0 bg-neutral-800 z-0">
            <img src={image} alt={name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 opacty-100 group-hover:opacity-80 transition-opacity"></div>

        <div className="absolute bottom-6 left-6 z-20">
            <span className="bg-neon-lime text-black text-xs font-bold px-2 py-1 rounded mb-2 inline-block shadow-lg border border-black/20">{year}</span>
            <h4 className="font-display text-2xl text-white uppercase drop-shadow-md">{name}</h4>
            <p className="text-neutral-300 text-sm font-medium">{theme}</p>
        </div>
    </div>
);

const HelmetGallerySection = () => {
    return (
        <section className="bg-black py-32 px-4 border-t border-white/10">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="font-display text-5xl md:text-7xl text-white">HELMET<br /><span className="text-neon-lime">GALLERY</span></h2>
                    <button className="hidden md:block border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors uppercase font-bold tracking-widest text-sm">View All</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <HelmetCard year="2024" name="DISCO BALL" theme="Chrome & Lights" image="https://images.unsplash.com/photo-1554641604-5858cfd3d0fb?q=80&w=600&auto=format&fit=crop" />
                    <HelmetCard year="2024" name="JAPAN GP" theme="Sakura Special" image="https://images.unsplash.com/photo-1528643598762-cb6630a911fd?q=80&w=600&auto=format&fit=crop" />
                    <HelmetCard year="2023" name="BASKETBALL" theme="Miami Heat" image="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?q=80&w=600&auto=format&fit=crop" />
                    <HelmetCard year="2023" name="CHROME" theme="Silverstone" image="https://images.unsplash.com/photo-1621643243144-83907ebc334b?q=80&w=600&auto=format&fit=crop" />
                </div>
            </div>
        </section>
    );
};

export default HelmetGallerySection;
