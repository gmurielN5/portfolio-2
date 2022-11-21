import { IconContext } from 'react-icons';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiExpress,
    SiSocketdotio,
    SiRedis,
    SiDocker,
    SiMongodb,
    SiHeroku,
    SiReact,
    SiBootstrap,
    SiShopify,
    SiThreedotjs,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobexd,
    SiGithub
} from 'react-icons/si';
import { FaNode, FaWordpress } from 'react-icons/fa';

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
                    case 'Html':
                        return <SiHtml5 />;
                    case 'Css':
                        return <SiCss3 />;
                    case 'Javascript':
                        return <SiJavascript />;
                    case 'NodeJs':
                        return <FaNode />;
                    case 'ExpressJs':
                        return <SiExpress />;
                    case 'SocketIo':
                        return <SiSocketdotio />;
                    case 'Redis':
                        return <SiRedis />;
                    case 'Docker':
                        return <SiDocker />;
                    case 'MongoDb':
                        return <SiMongodb />;
                    case 'Heroku':
                        return <SiHeroku />;
                    case 'React':
                        return <SiReact />;
                    case 'Bootstrap':
                        return <SiBootstrap />;
                    case 'Shopify':
                        return <SiShopify />;
                    case 'Wordpress':
                        return <FaWordpress />;
                    case 'ThreeJs':
                        return <SiThreedotjs />;
                    case 'Photoshop':
                        return <SiAdobephotoshop />;
                    case 'Illustrator':
                        return <SiAdobeillustrator />;
                    case 'AdobeXD':
                        return <SiAdobexd />;
                    case 'Github':
                        return <SiGithub />;
                    default:
                        return null;
                }
            })()}
        </IconContext.Provider>
    );
};
