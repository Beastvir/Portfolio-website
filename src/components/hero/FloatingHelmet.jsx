import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, Decal, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingHelmet = ({ mousePosition, scrollProgress }) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Bobbing animation
        const t = state.clock.getElapsedTime();
        meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;

        // Mouse follow
        const targetRotX = (mousePosition.current?.y || 0) * 0.2;
        const targetRotY = (mousePosition.current?.x || 0) * 0.3;

        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotX, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotY, 0.1);

        // Scroll effect (Helmet Slice - simplified for now to just vertical movement)
        // We can implement the slice effect later with custom shaders or multiple meshes
        meshRef.current.position.y += scrollProgress * 2;
    });

    return (
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
            <mesh
                ref={meshRef}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
                scale={hovered ? 1.1 : 1}
            >
                {/* Placeholder Helmet Geometry */}
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshStandardMaterial
                    color="#CCFF00"
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#CCFF00"
                    emissiveIntensity={0.2}
                />
                {/* Visor */}
                <mesh position={[0, 0.2, 0.9]} rotation={[0, 0, 0]}>
                    <boxGeometry args={[1.2, 0.4, 0.5]} />
                    <meshPhysicalMaterial color="black" roughness={0} metalness={1} clearcoat={1} />
                </mesh>
            </mesh>
        </Float>
    );
};

export default FloatingHelmet;
