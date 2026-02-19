import React from 'react';
import { ShoppingBag } from 'lucide-react';

const StorePromoSection = () => {
    return (
        <section className="bg-bg-light py-0 overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* Left Text */}
                <div className="flex flex-col justify-center p-12 lg:p-24 relative z-10">
                    <h2 className="font-display text-[20vw] lg:text-[12vw] leading-[0.8] text-black tracking-tighter mix-blend-multiply opacity-10 absolute top-0 left-0 -translate-x-12 select-none pointer-events-none">
                        LANDO
                    </h2>

                    <h3 className="font-display text-5xl lg:text-7xl mb-8 uppercase relative z-20">
                        World Drivers'<br />
                        <span className="text-neon-lime bg-black px-2">Champion</span> Collection
                    </h3>
                    <p className="font-body text-lg text-neutral-600 mb-12 max-w-md">
                        Shop the exclusive range of merchandise celebrating Lando's journey. From hoodies to caps, get the look.
                    </p>
                    <div>
                        <a href="#" className="inline-flex items-center gap-3 bg-neon-lime text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform">
                            <ShoppingBag size={20} />
                            Visit Store
                        </a>
                    </div>
                </div>

                {/* Right Visuals */}
                <div className="bg-neutral-200 relative flex items-center justify-center p-12 overflow-hidden min-h-[500px]">
                    <div className="absolute inset-0 bg-bg-dark opacity-5 pattern-dots pointer-events-none"></div>

                    {/* Product Floating Animation */}
                    <div className="relative w-72 h-96 bg-white shadow-2xl rounded-lg rotate-[-6deg] z-10 hover:rotate-0 transition-transform duration-500 cursor-pointer group overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop" alt="Lando Norris Hoodie" className="w-full h-full object-cover" />
                        <div className="absolute inset-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="font-display text-4xl text-neon-lime drop-shadow-md">HOODIE</span>
                        </div>
                    </div>

                    <div className="absolute w-72 h-96 bg-neon-lime shadow-xl rounded-lg rotate-[6deg] translate-x-12 translate-y-12">
                        <img src="https://plus.unsplash.com/premium_photo-1673356301535-ca87eb7f61ae?q=80&w=800&auto=format&fit=crop" alt="Merch texture" className="w-full h-full object-cover opacity-50 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorePromoSection;
