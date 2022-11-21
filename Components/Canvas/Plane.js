import * as THREE from 'three';

import { useFrame, useThree } from '@react-three/fiber';
import { usePlane, useSphere } from '@react-three/cannon';

export const Colliders = () => {
    const viewport = useThree((state) => state.viewport);

    //back
    usePlane(() => ({ position: [0, 0, -10], rotation: [0, 0, 0] }));
    //front
    usePlane(() => ({ position: [0, 0, 10], rotation: [0, -Math.PI, 0] }));
    // left
    usePlane(() => ({ position: [-10, 0, 0], rotation: [0, Math.PI / 2, 0] }));
    //rigth
    usePlane(() => ({ position: [10, 0, 0], rotation: [0, -Math.PI / 2, 0] }));
    //bottom
    usePlane(() => ({
        position: [0, -viewport.height / 2, 0],
        rotation: [-Math.PI / 2, 0, 0]
    }));
    //top
    usePlane(() => ({ position: [0, viewport.height / 2, 0], rotation: [Math.PI / 2, 0, 0] }));

    const [, api] = useSphere(() => ({ type: 'Kinematic', args: [1] }));

    return useFrame((state) =>
        api.position.set(
            (state.mouse.x * viewport.width) / 2,
            (state.mouse.y * viewport.height) / 2,
            0.5
        )
    );
};
