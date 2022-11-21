import { useRef, useMemo } from 'react';

import { Sphere } from './Sphere';

export const Spheres = ({ number, colors, words }) => {
    const ref = useRef();
    const sphere = useMemo(() => {
        const temp = [];
        for (let i = 0; i < number; i++) {
            const radius = Math.floor(Math.random() * (20 - 5) + 5);
            const size = Math.random() / 1.5;
            const count = Math.floor(Math.random() * 5 + 3);
            const color = colors[Math.floor(Math.random() * colors.length)];
            const word = words[Math.floor(Math.random() * words.length)];
            temp.push({
                radius,
                size,
                count,
                color,
                word
            });
        }
        return temp;
    }, [number, colors, words]);

    return (
        <group ref={ref}>
            {sphere.map((config, index) => (
                <Sphere
                    key={index}
                    radius={config.radius}
                    size={config.size}
                    color={config.color}
                    word={config.word}
                    count={config.count}
                    index={index}
                />
            ))}
        </group>
    );
};
