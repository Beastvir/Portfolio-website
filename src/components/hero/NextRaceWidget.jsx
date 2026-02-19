import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Trophy } from 'lucide-react';

const NextRaceWidget = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 w-48 bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl p-5 flex-col gap-4 z-30 hover:-translate-y-1 transition-transform duration-300"
        >
            <span className="text-[10px] font-bold tracking-widest text-text-muted uppercase">Next Race</span>

            <div className="h-24 w-full flex items-center justify-center opacity-80">
                {/* Simplified Melbourne Track SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-black fill-none stroke-[1.5px]">
                    <path d="M20,70 L20,30 L40,20 L70,30 L80,60 L60,80 L30,75 Z" strokeLinejoin="round" />
                </svg>
            </div>

            <div>
                <h3 className="font-display font-bold text-lg leading-none">MELBOURNE, GP</h3>
                <p className="font-body text-xs font-medium mt-1">14 MAR - 16 MAR</p>
            </div>

            <div className="pt-4 border-t border-black/10 flex items-center gap-2">
                <Trophy size={14} className="text-neon-lime fill-neon-lime" />
                <span className="text-[9px] font-bold tracking-tight">MCLAREN F1 SINCE 2019</span>
            </div>
        </motion.div>
    );
};

export default NextRaceWidget;
