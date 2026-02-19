import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SplitSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
    const xRight = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

    return (
        <section ref={containerRef} className="relative w-full min-h-[80vh] flex flex-col md:flex-row overflow-hidden">

            {/* On Track Panel */}
            <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-full bg-bg-dark text-white flex items-center justify-center p-8 group cursor-pointer overflow-hidden">
                <motion.div style={{ x: xLeft }} className="absolute inset-0 bg-neutral-900 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1920&auto=format&fit=crop"
                        alt="On Track Racing"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
                </motion.div>

                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <h3 className="font-display text-[15vw] md:text-[8vw] leading-[0.8] drop-shadow-2xl">
                        <span className="text-neon-lime">ON</span><br />
                        <span className="text-transparent stroke-text-white">TRACK</span>
                    </h3>
                    <p className="max-w-xs font-body text-neutral-200 font-medium tracking-wide">Results, stats, and race weekend coverage.</p>
                    <div className="w-12 h-12 rounded-full border border-neon-lime flex items-center justify-center text-neon-lime group-hover:bg-neon-lime group-hover:text-black transition-all duration-300">
                        <ArrowRight size={20} />
                    </div>
                </div>

                <div className="absolute inset-0 border-r border-white/10 pointer-events-none md:block hidden"></div>
            </div>

            {/* Off Track Panel */}
            <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-full bg-bg-light text-black flex items-center justify-center p-8 group cursor-pointer overflow-hidden">
                <motion.div style={{ x: xRight }} className="absolute inset-0 bg-neutral-200 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1920&auto=format&fit=crop"
                        alt="Off Track Lifestyle"
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                    />
                </motion.div>

                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                    <h3 className="font-display text-[15vw] md:text-[8vw] leading-[0.8] drop-shadow-lg">
                        <span className="text-white mix-blend-difference">OFF</span><br />
                        <span className="text-transparent stroke-text-black">TRACK</span>
                    </h3>
                    <p className="max-w-xs font-body text-white font-medium tracking-wide mix-blend-difference">Campaigns, gaming, and life behind the scenes.</p>
                    <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                        <ArrowRight size={20} />
                    </div>
                </div>
            </div>

            {/* Diagonal Divider Overlay for style */}
            <svg className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full z-20 pointer-events-none hidden md:block" width="100" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="100" y1="0" x2="0" y2="100" stroke="#CCFF00" strokeWidth="0.5" />
            </svg>
        </section>
    );
};

export default SplitSection;
