import * as THREE from 'three';
import { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';

import { NodesText } from './NodesText';

export const Sphere = ({ radius, size, color, word, count, index, vec = new THREE.Vector3() }) => {
    const { viewport } = useThree();

    const [ref] = useSphere((index) => ({
        mass: 1,
        position: [4 - Math.random() * 8, viewport.height, 0]
    }));

    const text = useMemo(() => {
        const points = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        for (let i = 1; i < count + 1; i++) {
            let phi = phiSpan * i;
            for (let j = 0; j < count; j++) {
                let theta = thetaSpan * j;

                points.push([
                    new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta))
                ]);
            }
        }
        return points;
    }, [count, radius]);

    return (
        <group ref={ref} castShadow receiveShadow>
            {text.map(([pos], index) => (
                <NodesText key={index} position={pos} color={color} size={size}>
                    {word}
                </NodesText>
            ))}
        </group>
    );
};
