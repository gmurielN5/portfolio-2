import React, { useEffect, useContext, useRef } from 'react';
import { gsap } from '../Animation/gsap';
import { useMousePosition } from './useMousePosition';
import { CursorContext } from './CustomCursorContext';
import styles from './CustomCursor.module.css';

const isMobile = () => {
    const ua = navigator.userAgent;
    return /Android|Mobi/i.test(ua);
};

export const CustomCursor = () => {
    if (typeof navigator !== 'undefined' && isMobile()) return null;
    const { clientX, clientY } = useMousePosition();
    const { cursor, isVisible, setIsVisible } = useContext(CursorContext);

    const ref = useRef();

    useEffect(() => {
        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        gsap.to(ref.current, 10, {
            rotation: '+=360',
            repeat: -1,
            ease: 'none',
            transformOrigin: '50% 50%'
        });
    });

    return (
        <div className={styles.cursor}>
            {cursor.scroll ? (
                <svg
                    className="cursor"
                    width={100}
                    height={100}
                    viewBox="0 0 100 100"
                    style={{
                        position: 'absolute',
                        left: clientX,
                        top: clientY,
                        transform: `translate(-50%, -50%) scale(20)`,
                        stroke: '#eaeaea',
                        fill: 'none',
                        strokeWidth: 0.1,
                        transition: 'transform .2s ease-in-out'
                    }}>
                    <circle cx="50" cy="50" r="5" />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        stroke="none"
                        fill="#eaeaea"
                        dy=".3em"
                        fontSize="1"
                        className={styles.text}>
                        Scroll
                    </text>
                </svg>
            ) : cursor.link ? (
                <svg
                    className="cursor"
                    ref={ref}
                    width={100}
                    height={100}
                    viewBox="0 0 500 500"
                    style={{
                        position: 'absolute',
                        left: clientX,
                        top: clientY
                    }}>
                    <defs>
                        <path
                            id="textcircle"
                            d="M250,400
                 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                        />
                    </defs>
                    <text
                        className={styles.text}
                        fill="none"
                        textLength="900"
                        stroke="#455e87"
                        strokeWidth={4}
                        fontSize="80">
                        <textPath href="#textcircle">View Project View Project</textPath>
                    </text>
                </svg>
            ) : (
                <svg
                    className="cursor"
                    width={100}
                    height={100}
                    viewBox="0 0 100 100"
                    style={{
                        position: 'absolute',
                        left: clientX,
                        top: clientY,
                        fill: '#eaeaea',
                        opacity: isVisible && clientX > 1 ? 1 : 0
                    }}>
                    <circle cx="50" cy="50" r="10" />
                </svg>
            )}
        </div>
    );
};
