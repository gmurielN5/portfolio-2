import cx from 'classnames';
import styles from './styles.module.css';

export const Text = () => {
    return (
        <div className={styles.section} id="sectionTwo">
            <div className={styles.header} data-scroll-section>
                <h2 className={cx('workTitle', styles.title)}>Selected</h2>
                <h3 className="workSubtitle">Projects</h3>
            </div>
        </div>
    );
};
