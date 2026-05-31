"use client";

import * as THREE from 'three';
import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, MeshTransmissionMaterial, Text, RoundedBox, Image, Sparkles } from "@react-three/drei";

// INOVASI BARU: Cincin Orbital Berputar
function OrbitalRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.2;
      ring1Ref.current.rotation.y = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * -0.15;
      ring2Ref.current.rotation.y = t * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.1;
      ring3Ref.current.rotation.x = t * 0.2;
    }
  });

  return (
    <group position={[0, 0, -0.5]}>
      {/* Cincin Luar (Biru) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.3} />
        {/* Node/Titik Cahaya Kecil di cincin */}
        <mesh position={[3.8, 0, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#60a5fa" />
        </mesh>
      </mesh>
      
      {/* Cincin Tengah (Emerald) */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.4} />
      </mesh>
      
      {/* Cincin Dalam (Ungu) */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.6, 0.01, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.5} />
        <mesh position={[-2.6, 0, 0]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshBasicMaterial color="#a78bfa" />
        </mesh>
      </mesh>
    </group>
  );
}

function FloatingGeometries() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-2.5, 1.2, -1.5]} rotation={[Math.PI / 4, 0, 0]} scale={0.7}>
        <torusKnotGeometry args={[0.8, 0.25, 150, 20]} />
        <MeshTransmissionMaterial thickness={0.5} roughness={0.1} transmission={1} ior={1.2} chromaticAberration={0.02} color="#93c5fd" />
      </mesh>
      <mesh position={[2.5, -1.2, -1.5]} rotation={[0, Math.PI / 3, Math.PI / 6]} scale={0.8}>
        <tetrahedronGeometry args={[1.5]} />
        <MeshTransmissionMaterial thickness={0.8} roughness={0.05} transmission={0.9} ior={1.4} chromaticAberration={0.05} color="#c7d2fe" />
      </mesh>
    </group>
  );
}

function HoloCard() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      const baseY = Math.sin(t) * 0.08;
      
      // EYE-TRACKING PARALLAX
      const targetRotationX = (state.pointer.y * Math.PI) / -8;
      const targetRotationY = (state.pointer.x * Math.PI) / 8;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX + Math.cos(t * 0.5) * 0.03, 0.1);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY + Math.sin(t * 0.5) * 0.08, 0.1);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, baseY, 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.8}>
        
        {/* Latar Belakang Foto */}
        <Image
          url="/profile2.png"
          transparent
          opacity={0.95}
          scale={[3.15, 4.75]}
          radius={0.16}
          position={[0, 0, -0.05]}
          toneMapped={false}
        />

        {/* Kaca Utama */}
        <RoundedBox args={[3.2, 4.8, 0.1]} radius={0.18} smoothness={4} position={[0, 0, 0]}>
          <MeshTransmissionMaterial thickness={0.2} roughness={0.08} transmission={0.95} ior={1.6} chromaticAberration={0.08} color="#e0e7ff" anisotropicBlur={0.1} />
        </RoundedBox>

        {/* Konten Teks Low Profile */}
        <group position={[0, 0, 0.15]}>
          <Text position={[0, -1.0, 0]} fontSize={0.25} color="#ffffff" anchorX="center" anchorY="middle" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff">
            HISYAM K. UMAM
          </Text>
          <Text position={[0, -1.3, 0]} fontSize={0.11} color="#cbd5e1" anchorX="center" anchorY="middle" letterSpacing={0.2} font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff">
            STRATEGIC LEADER & ENGINEER
          </Text>
          <mesh position={[0, -1.6, 0]}>
            <planeGeometry args={[1.5, 0.005]} />
            <meshBasicMaterial color="#ffffff" opacity={0.3} transparent />
          </mesh>
        </group>

      </Float>
    </group>
  );
}

export default function Canvas3D() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 12], fov: 35 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <spotLight position={[20, 20, 20]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#93c5fd" />
      <pointLight position={[10, 10, -5]} intensity={0.8} color="#c7d2fe" />

      <Suspense fallback={null}>
        <PresentationControls global snap={true} rotation={[0, 0, 0]} polar={[-Math.PI / 12, Math.PI / 12]} azimuth={[-Math.PI / 6, Math.PI / 6]}>
          <group position={[0, 0, 0]}>
            {/* PANGGIL CINCIN ORBITAL DI SINI */}
            <OrbitalRings />
            <HoloCard />
            <FloatingGeometries />
            <Sparkles count={150} scale={10} size={1.5} speed={0.4} opacity={0.4} color="#93c5fd" />
          </group>
        </PresentationControls>
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}