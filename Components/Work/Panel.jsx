import Image from 'next/image';
import cx from 'classnames';

import styles from './styles.module.css';

import { Icons } from '../Icons';

export const Panel = ({ title, text, image, link, service, stack, cursorLink }) => {
    return (
        <div className={cx('reveal', styles.container)}>
            <div className={styles.itemOne}>
                <h4>{title}</h4>
            </div>
            <div className={styles.itemTwo}>
                <div className={styles.services}>
                    <ul>
                        {service.map((key) => (
                            <li key={key.toString()} className={styles.list}>
                                <p>{key}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.text}>
                    <div>
                        {text.map((item) => (
                            <p key={item.toString()}>
                                <span>{item}</span>
                            </p>
                        ))}
                    </div>
                    {/* <div className={styles.linkRepo}>
                        <p className={styles.smallHeading}>Link to repo:</p>
                        <a
                            href="https://www.w3schools.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <Icons icon="Github" size={30} color={'#eaeaea'} />
                            github link
                        </a>
                    </div> */}
                    <div className={styles.stacklist}>
                        <p className={styles.smallHeading}>Stack:</p>
                        <ul>
                            {stack.map((t, i) => (
                                <li key={i}>
                                    <Icons icon={t} size={30} color={'#6d7787'} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className={styles.itemThree}
                onMouseEnter={() => cursorLink()}
                onMouseLeave={() => cursorLink()}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={image}
                        alt={title}
                        width={16}
                        height={9}
                        layout="responsive"
                        className="img"
                        loading="lazy"
                    />
                </a>
            </div>
        </div>
    );
};
