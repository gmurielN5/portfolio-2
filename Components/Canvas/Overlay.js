import styles from './Canvas.module.css';
import cx from 'classnames';

const Text = ({ children }) => {
    return (
        <div className={styles.header}>
            {children.split('').map((char, index) => {
                const style = { animationDelay: 0.5 + index / 3 + 's' };
                return (
                    <h1 key={index} style={style}>
                        {char}
                    </h1>
                );
            })}
        </div>
    );
};

export const Overlay = () => {
    return (
        <div className={cx('hero', styles.hero)}>
            <Text>Hi!</Text>
            <Text>I'm</Text>
            <Text>muriel</Text>
            <Text>Ganne</Text>
        </div>
    );
};
