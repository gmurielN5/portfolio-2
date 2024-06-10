import { IconContext } from 'react-icons';
import {
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiReact,
    SiSocketdotio,
    SiWebrtc,
    SiRedis,
    SiDocker,
    SiRedux,
    SiAmazonaws,
    SiMongodb,
    SiFirebase,
    SiBootstrap,
    SiStyledcomponents,
    SiTailwindcss,
    SiShopify,
    SiThreedotjs,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobexd,
    SiGithub,
    SiPwa
} from 'react-icons/si';
import { FaNode, FaStripe } from 'react-icons/fa';

export const Icons = ({ icon, size, color }) => {
    return (
        <IconContext.Provider
            value={{
                className: 'icon',
                size: size,
                color: color,
                style: { paddingRight: '0.8rem' }
            }}>
            {(() => {
                switch (icon) {
                    case 'Javascript':
                        return <SiJavascript />;
                    case 'Typescript':
                        return <SiTypescript />;
                    case 'NodeJs':
                        return <FaNode />;
                    case 'ExpressJs':
                        return <SiExpress />;
                    case 'React':
                        return <SiReact />;
                    case 'SocketIo':
                        return <SiSocketdotio />;
                    case 'Webrtc':
                        return <SiWebrtc />;
                    case 'Redis':
                        return <SiRedis />;
                    case 'Docker':
                        return <SiDocker />;
                    case 'Aws':
                        return <SiAmazonaws />;
                    case 'Redux':
                        return <SiRedux />;
                    case 'MongoDb':
                        return <SiMongodb />;
                    case 'Firebase':
                        return <SiFirebase />;
                    case 'Bootstrap':
                        return <SiBootstrap />;
                    case 'StyledComponent':
                        return <SiStyledcomponents />;
                    case 'Tailwind':
                        return <SiTailwindcss />;
                    case 'ThreeJs':
                        return <SiThreedotjs />;
                    case 'Shopify':
                        return <SiShopify />;
                    case 'Stripe':
                        return <FaStripe />;
                    case 'Photoshop':
                        return <SiAdobephotoshop />;
                    case 'Illustrator':
                        return <SiAdobeillustrator />;
                    case 'AdobeXD':
                        return <SiAdobexd />;
                    case 'Github':
                        return <SiGithub />;
                    case 'Pwa':
                        return <SiPwa />;
                    default:
                        return null;
                }
            })()}
        </IconContext.Provider>
    );
};
