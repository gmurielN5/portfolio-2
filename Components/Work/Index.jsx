import React, { useContext } from 'react';

import { CursorContext } from '../../CustomCursor/CustomCursorContext';

import { Text } from './Text';
import { Gallery } from './Gallery';

export const Work = () => {
    const { setCursor } = useContext(CursorContext);

    const cursorLink = () => {
        setCursor(({ link }) => ({ link: !link }));
    };

    return (
        <>
            <Text />
            <Gallery cursorLink={cursorLink} />
        </>
    );
};
