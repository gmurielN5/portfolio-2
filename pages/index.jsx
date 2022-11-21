import React from 'react';

import { CustomCursor } from '../CustomCursor/CustomCursor';

import { CanvasThree } from '../Components/Canvas/Canvas';
import { About } from '../Components/About/About/Index';
import { Work } from '../Components/Work/Index';
import { Footer } from '../Components/Footer/Index';

export default function Home() {
    return (
        <>
            <CustomCursor />
            <CanvasThree />
            <About />
            <Work />
            <Footer />
        </>
    );
}
