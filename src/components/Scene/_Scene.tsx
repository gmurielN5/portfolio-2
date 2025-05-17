'use client';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';

import { Loader } from './Loader';
import { Colliders } from './Colliders';
import { Spheres } from './Spheres';

export default function Scene() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas
        shadows
        gl={{
          alpha: false,
          stencil: false,
          depth: false,
          antialias: false,
        }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} castShadow />
          <Physics gravity={[0, -9.81, 0]}>
            <Colliders />
            <Spheres
              colors={[
                '#F24D2E',
                '#46F248',
                '#16D6F2',
                '#F22287',
                '#F28B3A',
              ]}
              words={['React', 'Node.Js', 'Three.js']}
              number={5}
            />
          </Physics>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
