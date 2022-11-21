import * as THREE from 'three';
import { Suspense } from 'react';

import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Stars, Loader } from '@react-three/drei';

import { Spheres } from './Spheres';
import { Colliders } from './Plane';

import { Overlay } from './Overlay';
import { FooterScroll } from './FooterScroll';

import styles from './Canvas.module.css';

export const CanvasThree = () => {
    return (
        <section className={styles.canvas}>
            <Canvas shadows gl={{ alpha: false, stencil: false, depth: false, antialias: false }}>
                <color attach="background" args={['#020209']} />
                <Suspense fallback={null}>
                    <Stars radius={400} factor={10} count={3000} />
                    <Physics>
                        <Colliders />
                        <Spheres
                            colors={['#F24D2E', '#46F248', '#16D6F2', '#F22287', '#F28B3A']}
                            words={['JAVASCRIPT', 'CSS', 'HTML', 'Node.Js', 'Three.js']}
                            number={20}
                        />
                    </Physics>
                </Suspense>
            </Canvas>
            <Loader />
            <Overlay />
            <FooterScroll />
        </section>
    );
};
