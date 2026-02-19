import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedLinePattern from './AnimatedLinePattern';
import NextRaceWidget from './NextRaceWidget';
import FloatingHelmet from './FloatingHelmet';
// import WebGLDistortionImage from './WebGLDistortionImage'; // Import when we have image
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
    const containerRef = useRef(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const [scrollProgress, setScrollProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    useEffect(() => {
        const handleScroll = () => setScrollProgress(window.scrollY / window.innerHeight);
        window.addEventListener('scroll', handleScroll);

        const handleMouseMove = (e) => {
            mousePosition.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} className="relative w-full h-screen bg-bg-light overflow-hidden">

            {/* Layer 1: Background Pattern */}
            <AnimatedLinePattern />

            {/* Layer 2: Next Race Widget */}
            <NextRaceWidget />

            {/* Layer 3: Main Visuals (3D Canvas) */}
            <div className="absolute inset-0 z-20">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <Environment preset="city" />

                    {/* Replace with actual image url when available */}
                    {/* <WebGLDistortionImage src="/path/to/image.jpg" mousePosition={mousePosition} /> */}

                    <FloatingHelmet mousePosition={mousePosition} scrollProgress={scrollProgress} />
                </Canvas>
            </div>

            {/* Layer 4: Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-black/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <ChevronDown size={20} />
            </motion.div>

        </section>
    );
};

export default HeroSection;
