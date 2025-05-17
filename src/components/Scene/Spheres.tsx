'use client';
import { useRef, useMemo } from 'react';
import { Group } from 'three';
import { Sphere } from './Sphere';

interface SpheresProps {
  number: number;
  colors: string[];
  words: string[];
}

export const Spheres: React.FC<SpheresProps> = ({
  number,
  colors,
  words,
}) => {
  const ref = useRef<Group>(null);

  const sphere = useMemo(() => {
    return Array.from({ length: number }).map(() => ({
      radius: Math.floor(Math.random() * (20 - 5) + 5),
      size: Math.random() / 1.5,
      count: Math.floor(Math.random() * 5 + 3),
      color: colors[Math.floor(Math.random() * colors.length)],
      word: words[Math.floor(Math.random() * words.length)],
    }));
  }, [number, colors, words]);

  return (
    <group ref={ref}>
      {sphere.map((config, index) => (
        <Sphere key={index} {...config} index={index} />
      ))}
    </group>
  );
};
