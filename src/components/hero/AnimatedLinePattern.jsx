import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLinePattern = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                </defs>

                {/* Organic Curve 1 */}
                <motion.path
                    d="M-100,500 C200,100 600,800 1200,200 S1800,600 2200,300"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                />

                {/* Organic Curve 2 */}
                <motion.path
                    d="M-100,800 C300,600 500,200 1000,500 S1600,100 2200,600"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Topographic Lines - Static for now, could be animated */}
                {[...Array(5)].map((_, i) => (
                    <path
                        key={i}
                        d={`M-100,${200 + i * 150} Q${window.innerWidth / 2},${100 + i * 150} ${window.innerWidth + 100},${300 + i * 150}`}
                        fill="none"
                        stroke="black"
                        strokeWidth="0.5"
                        opacity="0.3"
                    />
                ))}
            </svg>
        </div>
    );
};

export default AnimatedLinePattern;
