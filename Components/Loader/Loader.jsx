import React, { useEffect, useRef } from 'react';

import { gsap } from '../../Animation/gsap';

import cx from 'classnames';

import styles from './Loader.module.css';
export const Loader = () => {
    const el = useRef();
    const transition = useRef(null);
    const tl = useRef();

    useEffect(() => {
        const element = el.current;

        tl.current = gsap
            .timeline({
                defaults: { duration: 2, ease: 'power4.inOut' }
            })
            .to(element.querySelector('#svgLine'), { duration: 2, attr: { x1: 50, x2: 50 } }, 1)
            .to(transition.children[0], { y: -500 }, '>')
            .to(
                transition.children[1],
                {
                    y: 500
                },
                '<'
            );
    }, []);

    return (
        <div className={cx(styles.loaderWrapper, styles.absolute)} ref={el}>
            <ul className={styles.transition} ref={(el) => (transition = el)}>
                <li></li>
                <li></li>
            </ul>
            <div className={styles.loader}>
                <svg viewBox="0 -50 100 100" className={styles.line}>
                    <line
                        x1="0"
                        y1="0"
                        x2="100"
                        y2="0"
                        stroke="#eaeaea"
                        strokeWidth={0.5}
                        id="svgLine"
                    />
                </svg>
            </div>
        </div>
    );
};
