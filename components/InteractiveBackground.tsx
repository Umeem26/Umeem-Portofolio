"use client";

import React, { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { PresentationControls } from "@react-three/drei";

function ParticleWave() {
  const geomRef = useRef<THREE.BufferGeometry>(null);
  const groupRef = useRef<THREE.Group>(null);

  const gridWidth = 70;
  const gridDepth = 70;
  const count = gridWidth * gridDepth;

  // Create plane of particle positions
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    let index = 0;
    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridDepth; j++) {
        const x = (i / gridWidth - 0.5) * 16;
        const z = (j / gridDepth - 0.5) * 16;
        arr[index++] = x;
        arr[index++] = 0; // y updated in useFrame
        arr[index++] = z;
      }
    }
    return arr;
  }, [count]);

  // Assign premium colors to particles (Emerald, Gold, Alabaster/White)
  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    const emerald = new THREE.Color("#065F46");
    const gold = new THREE.Color("#D4AF37");
    const white = new THREE.Color("#F3F3F1");

    let index = 0;
    for (let i = 0; i < count; i++) {
      // Deterministic pseudo-random generator to satisfy react-hooks/purity
      const x = Math.sin(i + 1) * 10000;
      const rand = x - Math.floor(x);
      
      let col = white;
      if (rand < 0.5) {
        col = emerald;
      } else if (rand < 0.85) {
        col = gold;
      }
      arr[index++] = col.r;
      arr[index++] = col.g;
      arr[index++] = col.b;
    }
    return arr;
  }, [count]);

  // Generate round glowing dot texture to replace generic square points
  const particleTexture = useMemo(() => {
    if (typeof window === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.6, "rgba(255, 255, 255, 0.1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  useFrame((state) => {
    if (!geomRef.current) return;
    const time = state.clock.getElapsedTime();
    const pointer = state.pointer;
    const posAttr = geomRef.current.attributes.position;

    // Fluid mesh movement
    for (let i = 0; i < count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);

      // Waves formula (ripple expanding outward from center)
      const distFromCenter = Math.sqrt(x * x + z * z);
      let y = Math.sin(distFromCenter * 0.8 - time * 1.5) * 0.45;

      // Mouse distortion: repel points near the cursor
      // Pointer is normalized coordinates [-1, 1], so we map it to 3D space
      const mouseX = pointer.x * 8;
      const mouseZ = pointer.y * 8;
      const distToMouse = Math.sqrt((x - mouseX) ** 2 + (z - mouseZ) ** 2);

      if (distToMouse < 3.0) {
        // Influence strength increases closer to cursor
        const force = (3.0 - distToMouse) * 0.25;
        y += Math.cos(distToMouse * 8 - time * 6) * force;
      }

      posAttr.setY(i, y);
    }
    posAttr.needsUpdate = true;

    // Micro-rotation based on cursor for continuous elegant reaction
    if (groupRef.current) {
      const targetRotX = (pointer.y * Math.PI) / 10;
      const targetRotY = (pointer.x * Math.PI) / 10;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry ref={geomRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.16}
          vertexColors
          transparent
          opacity={0.85}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          map={particleTexture || undefined}
        />
      </points>
    </group>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#050b14] overflow-hidden -z-10">
      {/* Background radial gradient to add depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,95,70,0.08)_0%,rgba(5,11,20,0)_70%)] pointer-events-none" />
      
      <Canvas
        camera={{ position: [0, 5, 12], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#D4AF37" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#065F46" />

        <Suspense fallback={null}>
          <PresentationControls
            global
            snap
            rotation={[0.1, 0, 0]}
            polar={[-Math.PI / 8, Math.PI / 8]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <ParticleWave />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
