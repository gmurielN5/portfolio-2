'use client';
import { RigidBody } from '@react-three/rapier';
import { useEffect, useRef, useState } from 'react';

// 🖱️ Mouse Collider component
export const MouseCollider: React.FC = () => {
  const ref = useRef<any>(null);
  const [mousePosition, setMousePosition] = useState<
    [number, number, number]
  >([0, 0, 0]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 10 - 5;
      const y = -(event.clientY / window.innerHeight) * 5 + 2;

      setMousePosition([x, y, 0]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () =>
      window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.setTranslation(
        {
          x: mousePosition[0],
          y: mousePosition[1],
          z: mousePosition[2],
        },
        true
      );
    }
  }, [mousePosition]);

  return (
    <RigidBody ref={ref} type="kinematicPosition">
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial color="red" transparent opacity={1} />
      </mesh>
    </RigidBody>
  );
};
