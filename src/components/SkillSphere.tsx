"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, TrackballControls, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Java', slug: 'java' },
  { name: 'Spring Boot', slug: 'spring' },
  { name: 'React', slug: 'react' },
  { name: 'Angular', slug: 'angular' },
  { name: 'PostgreSQL', slug: 'postgresql' },
  { name: 'Docker', slug: 'docker' },
  { name: 'AWS', slug: 'amazonwebservices' },
  { name: 'Kubernetes', slug: 'kubernetes' },
  { name: 'Python', slug: 'python' },
  { name: 'TypeScript', slug: 'typescript' },
  { name: 'MySQL', slug: 'mysql' },
  { name: 'Ionic', slug: 'ionic' },
  { name: 'Git', slug: 'git' },
  { name: 'Flutter', slug: 'flutter' },
  { name: 'Node.js', slug: 'nodejs' },
  { name: 'Tailwind', slug: 'tailwindcss' },
];

function SkillIcon({ skill, position, isMobile }: { skill: any; position: THREE.Vector3; isMobile: boolean }) {
  return (
    <Html position={position} center distanceFactor={12}>
      <div className="flex flex-col items-center gap-1 group cursor-pointer">
        <div className={cn(
          "flex items-center justify-center transition-all group-hover:scale-125",
          isMobile ? "w-8 h-8" : "w-10 h-10"
        )}>
          <i className={cn(
            `devicon-${skill.slug}-plain colored opacity-90 group-hover:opacity-100`,
            isMobile ? "text-xl" : "text-3xl"
          )} />
        </div>
        <span className={cn(
          "text-[8px] font-mono font-bold text-zinc-400 uppercase transition-opacity",
          isMobile ? "opacity-60" : "opacity-0 group-hover:opacity-100"
        )}>
          {skill.name}
        </span>
      </div>
    </Html>
  );
}

function Cloud({ radius = 4.5, isMobile = false }: { radius?: number; isMobile?: boolean }) {
  const words = useMemo(() => {
    const temp = [];
    const count = skills.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
      temp.push([pos, skills[i]]);
    }
    return temp;
  }, [radius]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Globe Outline */}
      <Icosahedron args={[radius * 0.95, 2]}>
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.3}
        />
      </Icosahedron>

      {words.map(([pos, skill], i) => (
        <SkillIcon key={i} skill={skill} position={pos as THREE.Vector3} isMobile={isMobile} />
      ))}
    </group>
  );
}

export const SkillSphere = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const radius = isMobile ? 3.5 : 4.5;

  return (
    <div className="w-full h-[450px] md:h-[600px] cursor-grab active:cursor-grabbing relative flex items-center justify-center overflow-hidden">

      {/* Thin Bluish Halo - Positioned precisely around the 3D globe */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className={cn(
          "rounded-full border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500",
          isMobile ? "w-[300px] h-[300px]" : "w-[440px] h-[440px]"
        )} />
      </div>

      <div className="w-full h-full max-w-[800px] relative z-10">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 45 }} gl={{ alpha: true }}>
          <ambientLight intensity={3} />
          <Cloud radius={radius} isMobile={isMobile} />
          <TrackballControls
            noPan
            noZoom
            rotateSpeed={3.0}
            staticMoving={false}
            dynamicDampingFactor={0.1}
          />
        </Canvas>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-6 py-2 rounded-full border-zinc-700 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-3 z-20 whitespace-nowrap">
        <div className="w-4 h-4 rounded-full border border-zinc-600 flex items-center justify-center">
          <div className="w-1 h-1 bg-zinc-400 rounded-full" />
        </div>
        Drag to explore skills universe
      </div>
    </div>
  );
};
