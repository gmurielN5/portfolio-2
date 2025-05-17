'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

import { Ball } from './Ball';
import { Colliders } from './Colliders';
import { MouseCollider } from './MouseCollider';

// 🏗️ Scene component
export default function Scene() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} castShadow />
        <Physics gravity={[0, -9.81, 0]}>
          {/* Colliders */}
          <Colliders />
          {/* Balls */}
          <Ball position={[-2, 2, 0]} />
          <Ball position={[0, 3, 0]} />
          <Ball position={[2, 4, 0]} />
          <Ball position={[-2, 2, 0]} />
          <Ball position={[0, 3, 0]} />
          <Ball position={[2, 4, 0]} />

          {/* Mouse Collider */}
          <MouseCollider />
        </Physics>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
