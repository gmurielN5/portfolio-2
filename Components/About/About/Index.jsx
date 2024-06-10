import React from 'react';

import cx from 'classnames';

import styles from './styles.module.css';

const text =
    'With a passion for design,\n animation and interaction.\n Self-taught programmer \n who love to solve challenging \n problems and learn the latest \n technologies.';

export const About = () => {
    return (
        <div className={styles.section} id="sectionOne" data-scroll-section>
            <div className={styles.header}>
                <h2 className={cx('title', styles.title)}>Full Stack</h2>
                <h3 className="subtitle">Developer</h3>
            </div>
            <div>
                {text.split('\n').map((item, i) => (
                    <div className={styles.lines} key={i}>
                        <p className="text">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
