"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, TrackballControls, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { cn } from '@/lib/utils';
import { usePortfolio } from '@/lib/context';
import { Skill } from '@/lib/data';

function SkillIcon({ skill, position, isMobile }: { skill: Skill; position: THREE.Vector3; isMobile: boolean }) {
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

function Cloud({ radius = 4.5, isMobile = false, skills }: { radius?: number; isMobile?: boolean; skills: Skill[] }) {
  const words = useMemo(() => {
    const temp: Array<[THREE.Vector3, Skill]> = [];
    const count = skills.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const pos = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
      temp.push([pos, skills[i]]);
    }
    return temp;
  }, [radius, skills]);

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
  const { skills } = usePortfolio();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const radius = isMobile ? 3.5 : 4.5;

  return (
    <div className="space-y-8">
      <div className="w-full h-[400px] sm:h-[460px] md:h-[540px] cursor-grab active:cursor-grabbing relative flex items-center justify-center overflow-hidden">
        {/* Thin Bluish Halo - Positioned precisely around the 3D globe */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className={cn(
            "rounded-full border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500",
            isMobile ? "w-[280px] h-[280px]" : "w-[420px] h-[420px]"
          )} />
        </div>

        <div className="w-full h-full max-w-[800px] relative z-10">
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 45 }} gl={{ alpha: true }}>
            <ambientLight intensity={3} />
            <Cloud radius={radius} isMobile={isMobile} skills={skills} />
            <TrackballControls
              noPan
              noZoom
              rotateSpeed={3.0}
              staticMoving={false}
              dynamicDampingFactor={0.1}
            />
          </Canvas>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 glass-panel px-5 py-1.5 rounded-full border-zinc-800 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 flex items-center gap-2.5 z-20 whitespace-nowrap">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Drag to rotate 3D sphere
        </div>
      </div>

      {/* Quick-scan Terminal Skills Index */}
      <div className="bg-zinc-950/90 border border-zinc-800 rounded-xl p-4 sm:p-5">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 font-mono text-xs text-zinc-400">
          <span>$ jq &apos;.skills[].name&apos; skills.json</span>
          <span className="text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
            {skills.length} packages installed
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-blue-500/40 transition-colors group"
            >
              <i className={`devicon-${skill.slug}-plain colored text-sm`} />
              <span className="font-mono text-xs text-zinc-300 group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
