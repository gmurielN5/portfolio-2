'use client';
import { RigidBody } from '@react-three/rapier';
import { useRef } from 'react';

// 🏀 Ball component
export const Ball = ({
  position,
}: {
  position: [number, number, number];
}) => {
  const ref = useRef<any>(null);

  return (
    <RigidBody ref={ref} colliders="ball" restitution={0.8}>
      <mesh castShadow position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </RigidBody>
  );
};
