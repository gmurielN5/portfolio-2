import cx from 'classnames';
import styles from './styles.module.css';

import { data } from '../../data/data';
import { Panel } from './Panel';

export const Gallery = ({ cursorBlack, cursorLink }) => {
    return (
        <div className={cx('gallery', styles.gallery)}>
            {data.map((item, index) => (
                <div className={cx('panel', styles.panel)} key={index}>
                    <Panel
                        key={index}
                        {...item}
                        cursorBlack={cursorBlack}
                        cursorLink={cursorLink}
                    />
                </div>
            ))}
        </div>
    );
};
