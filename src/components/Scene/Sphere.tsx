'use client';
import * as THREE from 'three';
import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { NodesText } from './NodesText';

interface SphereProps {
  radius: number;
  size: number;
  color: string;
  word: string;
  count: number;
  index: number;
}

export const Sphere: React.FC<SphereProps> = ({
  radius,
  size,
  color,
  word,
  count,
}) => {
  const { viewport } = useThree();
  // const ref = useRef<THREE.Group>(null);

  const text = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++) {
      const phi = phiSpan * i;
      for (let j = 0; j < count; j++) {
        const theta = thetaSpan * j;
        points.push(
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phi, theta)
          )
        );
      }
    }
    return points;
  }, [count, radius]);

  return (
    <RigidBody
      colliders="ball"
      restitution={0.9} // Increased bounciness
      friction={0.3}
      position={[
        Math.random() * 8 - 4,
        viewport.height / 2,
        Math.random() * 8 - 4,
      ]}
    >
      <group
        // ref={ref}
        castShadow
        receiveShadow
        // position={[4 - Math.random() * 8, viewport.height, 0]}
      >
        {text.map((pos, i) => (
          <NodesText
            key={i}
            position={[pos.x, pos.y, pos.z]}
            color={color}
            size={size}
          >
            {word}
          </NodesText>
        ))}
      </group>
    </RigidBody>
  );
};
