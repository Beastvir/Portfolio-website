import React from 'react';
import { motion } from 'framer-motion';

const TimelineCard = ({ year, title, description, image, size = "md" }) => {
    const heightClass = size === "lg" ? "h-96" : size === "md" ? "h-80" : "h-64";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative ${heightClass} bg-neutral-900 rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
        >
            <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="bg-neon-lime text-black px-2 py-1 text-xs font-bold rounded uppercase tracking-wider mb-2 inline-block">{year}</span>
                <h4 className="font-display text-2xl text-white leading-none uppercase">{title}</h4>
                <p className="font-body text-sm text-neutral-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">{description}</p>
            </div>
        </motion.div>
    );
};

const TimelineSection = () => {
    return (
        <section className="bg-bg-light py-24 px-4">
            <div className="container mx-auto">
                <h2 className="font-display text-5xl md:text-8xl text-black mb-16 text-center">TRACK RECORD</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-6 pt-12">
                        <TimelineCard
                            year="2024"
                            title="MIAMI GP VICTORY"
                            description="First career win in Formula 1."
                            image="https://images.unsplash.com/photo-1627454820574-789a502bd7cb?q=80&w=800&auto=format&fit=crop"
                            size="lg"
                        />
                        <TimelineCard
                            year="2023"
                            title="BRITISH GP PODIUM"
                            description="Home race heroics with P2."
                            image="https://images.unsplash.com/photo-1596700877083-d34e6d420556?q=80&w=800&auto=format&fit=crop"
                            size="md"
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <TimelineCard
                            year="2024"
                            title="DUTCH GP DOMINANCE"
                            description="Win from pole by 22 seconds."
                            image="https://images.unsplash.com/photo-1632732971263-aa2d348006dd?q=80&w=800&auto=format&fit=crop"
                            size="md"
                        />
                        <TimelineCard
                            year="2024"
                            title="SINGAPORE SLING"
                            description="Controlling the race from the front."
                            image="https://images.unsplash.com/photo-1510250647460-6dfd15de3553?q=80&w=800&auto=format&fit=crop"
                            size="lg"
                        />
                    </div>
                    <div className="flex flex-col gap-6 pt-24">
                        <TimelineCard
                            year="2019"
                            title="F1 DEBUT"
                            description="Youngest ever British F1 driver."
                            image="https://images.unsplash.com/photo-1588610534575-f938c6427a1b?q=80&w=800&auto=format&fit=crop"
                            size="md"
                        />
                        <TimelineCard
                            year="2021"
                            title="MONZA 1-2"
                            description="Historic result for McLaren."
                            image="https://images.unsplash.com/photo-1635073908681-42ab74510b65?q=80&w=800&auto=format&fit=crop"
                            size="md"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
