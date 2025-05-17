'use client';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { Text } from '@react-three/drei';

interface NodesTextProps {
  color: string;
  children: string;
  size: number;
  position?: [number, number, number];
}

export const NodesText: React.FC<NodesTextProps> = ({
  color,
  children,
  size,
  position = [0, 0, 0],
}) => {
  const ref = useRef<THREE.Mesh>(null);

  const config = useMemo(
    () => ({
      color,
      fontSize: size,
      text: children,
    }),
    [color, size, children]
  );

  return <Text ref={ref} position={position} {...config} />;
};
