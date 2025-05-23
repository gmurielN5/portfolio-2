import { Icons } from '../Icons';
import moment from 'moment';

import styles from './styles.module.css';

export const Message = ({ message }) => {
    return (
        <>
            {message ? (
                <div className={styles.heading}>
                    <h4>{message}</h4>
                </div>
            ) : (
                <div className="message">
                    <div className={styles.heading}>
                        <h3>Contact</h3>
                        <h4>me</h4>
                    </div>
                    <div className={styles.text}>
                        <p>
                            <a
                                href="https://github.com/gmurielN5"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icons icon={'Github'} size={32} color={'#eaeaea'} />
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};
