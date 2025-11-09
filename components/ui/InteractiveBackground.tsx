'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo, useEffect } from 'react';
import { Vector3, Mesh, BufferGeometry, BufferAttribute } from 'three';

interface ParticleSystemProps {
  mousePosition: { x: number; y: number };
}

function ParticleSystem({ mousePosition }: ParticleSystemProps) {
  const meshRef = useRef<Mesh>(null);
  const { viewport, size } = useThree();
  
  const particleCount = 200;
  
  // Initialiser les positions et vitesses des particules
  const { positions, velocities, originalPositions } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position initiale aléatoire
      const x = (Math.random() - 0.5) * viewport.width * 2;
      const y = (Math.random() - 0.5) * viewport.height * 2;
      const z = (Math.random() - 0.5) * 20;
      
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
      
      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;
      
      // Vitesse initiale
      velocities[i] = (Math.random() - 0.5) * 0.02;
      velocities[i + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i + 2] = (Math.random() - 0.5) * 0.01;
    }
    
    return { positions, velocities, originalPositions };
  }, [viewport]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    const geometry = meshRef.current.geometry as BufferGeometry;
    const positionAttribute = geometry.getAttribute('position') as BufferAttribute;
    const positions = positionAttribute.array as Float32Array;
    
    // Convertir la position de la souris en coordonnées 3D
    const mouseX = (mousePosition.x / size.width) * viewport.width - viewport.width / 2;
    const mouseY = -(mousePosition.y / size.height) * viewport.height + viewport.height / 2;
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Distance à la souris
      const dx = positions[i] - mouseX;
      const dy = positions[i + 1] - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Force de répulsion/attraction basée sur la distance
      const forceDistance = Math.min(distance, 5);
      const repelForce = Math.pow(1 - forceDistance / 5, 2);
      
      // Appliquer la force si suffisamment proche
      if (distance < 5) {
        const angle = Math.atan2(dy, dx);
        velocities[i] += Math.cos(angle) * repelForce * 0.01;
        velocities[i + 1] += Math.sin(angle) * repelForce * 0.01;
      }
      
      // Mouvement naturel + retour vers position originale
      const returnForceX = (originalPositions[i] - positions[i]) * 0.001;
      const returnForceY = (originalPositions[i + 1] - positions[i + 1]) * 0.001;
      
      velocities[i] += returnForceX;
      velocities[i + 1] += returnForceY;
      
      // Appliquer la friction
      velocities[i] *= 0.99;
      velocities[i + 1] *= 0.99;
      velocities[i + 2] *= 0.99;
      
      // Mettre à jour les positions
      positions[i] += velocities[i];
      positions[i + 1] += velocities[i + 1];
      positions[i + 2] += velocities[i + 2];
      
      // Rotation lente sur Z
      positions[i + 2] = originalPositions[i + 2] + Math.sin(state.clock.elapsedTime * 0.5 + i) * 2;
    }
    
    positionAttribute.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#60a5fa"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

interface InteractiveBackgroundProps {
  mousePosition: { x: number; y: number };
  className?: string;
}

export default function InteractiveBackground({ mousePosition, className = "" }: InteractiveBackgroundProps) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ParticleSystem mousePosition={mousePosition} />
        
        {/* Lumières ambiantes */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#f472b6" />
      </Canvas>
      
      {/* Effet de bruit/grain par-dessus */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}