import Head from 'next/head';
import { SmoothScrollProvider } from '../context/Scroll';
import { CursorContextProvider } from '../CustomCursor/CustomCursorContext';
import '../styles/styles.css';
import '../styles/locomotive-scroll.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Muriel Ganne Portfolio</title>
                <link rel="icon" href="/favicon.png" />
                <meta
                    name="description"
                    content="Muriel Ganne junior full stack developer portfolio"
                />
            </Head>
            <CursorContextProvider>
                <SmoothScrollProvider>
                    <Component {...pageProps} />
                </SmoothScrollProvider>
            </CursorContextProvider>
        </>
    );
}

export default MyApp;
