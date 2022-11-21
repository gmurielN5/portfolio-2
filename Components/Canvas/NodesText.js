import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';

export const NodesText = ({ color, children, size, ...props }) => {
    const ref = useRef();

    const font = useLoader(THREE.FontLoader, './BebasNeue.json');
    const config = useMemo(
        () => ({
            font,
            color,
            fontSize: size,
            text: children
        }),
        [font, color, size, children]
    );

    return <Text ref={ref} {...props} {...config} />;
};
