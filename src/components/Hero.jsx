import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Float, PerspectiveCamera, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import profileImg from '../assets/profilecard.jpeg';

// --- Sub-components for 3D Scene ---

function AnimatedGrid() {
    const gridRef = useRef();

    useFrame((state) => {
        if (gridRef.current) {
            // Slowly drift the grid
            gridRef.current.position.z = (state.clock.getElapsedTime() * 0.2) % 2;
        }
    });

    return (
        <group rotation={[Math.PI / 2.5, 0, 0]} position={[0, -2, -5]}>
            <gridHelper args={[60, 60, 0x00F5FF, 0x00F5FF]} position={[0, 0, 0]} ref={gridRef}>
                <meshBasicMaterial attach="material" color="#00F5FF" transparent opacity={0.08} />
            </gridHelper>
        </group>
    );
}

function FloatingCube({ scrollProgress }) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Base rotation
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;

        // Mouse reaction (simple tilt)
        const { mouse } = state;
        const targetRotX = mouse.y * 0.5;
        const targetRotY = mouse.x * 0.5;

        meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.05;
        meshRef.current.rotation.y += (targetRotY - meshRef.current.rotation.y) * 0.05;
    });

    // Calculate position based on scroll
    // Phase 1: Moves up faster
    // Phase 2: Rotates faster
    // For simplicity here, we let the parent HTML control heavy transforms via CSS or just let R3F handle local animations.
    // But we can bind R3F position to scroll if we pass the scroll value into the canvas or use a global store.
    // For now, let's keep it simple: it floats in 3D space.

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[2, 0, 0]} scale={0.8} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshPhysicalMaterial
                    color="#0B0F14"
                    emissive="#00F5FF"
                    emissiveIntensity={hovered ? 0.5 : 0.2}
                    roughness={0.1}
                    metalness={0.8}
                    transmission={0.5}
                    thickness={2}
                    transparent={true}
                    opacity={0.6}
                    wireframe={false}
                />
                <lineSegments>
                    <edgesGeometry args={[new THREE.BoxGeometry(1.5, 1.5, 1.5)]} />
                    <lineBasicMaterial color="#00F5FF" linewidth={2} />
                </lineSegments>
            </mesh>
        </Float>
    );
}

function Scene({ scrollY }) {
    // We could pass scrollY to control 3D elements if needed.
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} color="#00F5FF" intensity={2} />
            <pointLight position={[-10, -10, -5]} color="#ff00ff" intensity={0.5} />
            <AnimatedGrid />
            <FloatingCube />
        </>
    );
}


export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"], // Track as the container scrolls out of view
    });

    // --- Scroll Transformations ---

    // Phase 1 (0 -> 0.4): Portrait Scales Down & Moves Up
    const portraitScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1.15, 0.75, 0.55, 0.45]);
    const portraitY = useTransform(scrollYProgress, [0, 0.4, 1], ["0%", "-30%", "-60%"]); // Moves up
    const portraitX = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], ["0%", "0%", "-35%", "-40%"]); // Moves left in Phase 2

    // Typography
    const headlineY = useTransform(scrollYProgress, [0, 0.4], ["0%", "-50%"]);
    const headlineOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);
    const headlineSkew = useTransform(scrollYProgress, [0, 0.4], ["0deg", "4deg"]);

    // Cube Parallax 
    // We can just translate the Canvas container or use CSS transforms on the canvas wrapper? 
    // R3F canvas is fixed/sticky.
    // Let's use CSS transforms on the Canvas wrapper for parallax.
    const canvasY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    // Opacity of new section teaser
    const teaserOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
    const dividerWidth = useTransform(scrollYProgress, [0.8, 1], ["0%", "100%"]);

    // Smooth spring for the scroll values to simulate "dolly" weight
    const smoothPortraitScale = useSpring(portraitScale, { stiffness: 100, damping: 20 });
    const smoothPortraitY = useSpring(portraitY, { stiffness: 100, damping: 20 });
    const smoothPortraitX = useSpring(portraitX, { stiffness: 100, damping: 20 });

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-[#0B0F14] text-white overflow-clip">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden perspective-1000">

                {/* Layer 1 & 4: 3D Scene (Background Grid + Cube) */}
                <motion.div style={{ y: canvasY }} className="absolute inset-0 z-0 pointer-events-none">
                    <Canvas gl={{ antialias: true, alpha: true }}>
                        <Scene />
                    </Canvas>
                </motion.div>

                {/* Layer 2: Ambient Glow */}
                <div className="absolute inset-0 z-[-1] bg-[#0B0F14] flex items-center justify-center pointer-events-none">
                    <div className="w-[60vw] h-[60vw] bg-[#00F5FF] rounded-full opacity-[0.08] blur-[120px] animate-pulse" />
                </div>

                {/* Layer 5: Typography */}
                <motion.div
                    style={{ y: headlineY, opacity: headlineOpacity, skewX: headlineSkew }}
                    className="absolute inset-0 z-20 flex flex-col justify-center items-center pointer-events-none mix-blend-overlay"
                >
                    <h1 className="text-[12vw] font-black leading-[0.85] tracking-tighter text-center select-none flex flex-col items-center">
                        <span className="block text-white">BUILD.</span>
                        <span className="block text-transparent stroke-text">BREAK.</span>
                        <span className="block text-white">OPTIMIZE.</span>
                        <span className="block text-transparent stroke-text">REPEAT.</span>
                    </h1>
                </motion.div>

                {/* Layer 3: Main Visual (Portrait) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <motion.div
                        style={{
                            scale: smoothPortraitScale,
                            y: smoothPortraitY,
                            x: smoothPortraitX
                        }}
                        className="relative w-[30vh] aspect-[0.7] md:w-[40vh] shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[#00F5FF] opacity-20 mix-blend-overlay z-10"></div>
                        <img
                            src={profileImg}
                            alt="Developer Portrait"
                            className="w-full h-full object-cover grayscale contrast-125 brightness-90 mask-image-gradient"
                        />

                        {/* Glitch/Distortion Overlay (CSS pseudo) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-60"></div>
                    </motion.div>
                </div>

                {/* Phase 3 Elements */}
                <motion.div
                    style={{ opacity: teaserOpacity }}
                    className="absolute bottom-10 right-10 text-right z-30"
                >
                    <h2 className="text-xl md:text-2xl font-bold font-mono text-[#00F5FF]">
                        Software Developer <br /> Systems Thinker <br /> BTech
                    </h2>
                </motion.div>

                <motion.div
                    style={{ width: dividerWidth }}
                    className="absolute bottom-0 left-0 h-[1px] bg-[#00F5FF] z-40"
                />

            </div>
        </div>
    );
}
