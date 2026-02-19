import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Vertex Shader
const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;

  void main() {
    vUv = uv;
    vec3 wPos = position;
    
    // Mouse Distortion
    float dist = distance(uv, uMouse);
    float effect = smoothstep(0.4, 0.0, dist);
    wPos.z += effect * 0.1 * sin(uTime * 2.0);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(wPos, 1.0);
  }
`;

// Fragment Shader
const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 pulse = vec2(sin(uTime) * 0.01, cos(uTime) * 0.01);
    vec4 color = texture2D(uTexture, vUv + pulse * 0.1); // Simple distortion
    gl_FragColor = color;
  }
`;

const WebGLDistortionImage = ({ src, mousePosition }) => {
    const meshRef = useRef();

    // Load texture
    const texture = useTexture(src);

    const uniforms = useMemo(
        () => ({
            uTexture: { value: texture },
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }),
        [texture]
    );

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
            // Update mouse uniform from prop if passed, or state.mouse
            meshRef.current.material.uniforms.uMouse.value.set(
                (state.mouse.x + 1) / 2,
                (state.mouse.y + 1) / 2
            );
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]} scale={[4, 5, 1]}>
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent
            />
        </mesh>
    );
};

export default WebGLDistortionImage;
