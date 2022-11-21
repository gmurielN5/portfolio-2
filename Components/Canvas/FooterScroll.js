import React, { useContext } from 'react';
import { CursorContext } from '../../CustomCursor/CustomCursorContext';

import styles from './Canvas.module.css';

export const FooterScroll = () => {
    const { setCursor } = useContext(CursorContext);
    const toggleCursor = () => {
        setCursor(({ scroll }) => ({ scroll: !scroll }));
    };

    return (
        <div
            className={styles.scroll}
            data-scroll-section
            onMouseEnter={() => toggleCursor()}
            onMouseLeave={() => toggleCursor()}></div>
    );
};
