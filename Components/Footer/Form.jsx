import { useRef } from 'react';
import { gsap } from '../../Animation/gsap';

import styles from './styles.module.css';

export const Form = ({ form, setForm, onSubmit }) => {
    const { values, isLoading } = form;
    const el = useRef();

    const handleChange = ({ target }) => {
        setForm((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value
            }
        }));
    };

    //todo animation on mouseEnter and Move Leave
    const mouseEnter = () => {
        gsap.to(el.current, { backgroundColor: '#6d7787' });
    };

    //todo add animation for button when state is loading

    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    className="show-cursor"
                />
            </label>

            <label htmlFor="email">
                Email:
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="show-cursor"
                />
            </label>
            <label htmlFor="subject">
                Subject:
                <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    onChange={handleChange}
                    className="show-cursor"
                />
            </label>

            <label>
                Message:
                <textarea
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    className="show-cursor"
                />
            </label>

            <button type="submit" className={styles.button} ref={el} onMouseEnter={mouseEnter}>
                {isLoading ? 'Loading' : 'Send'}
            </button>
        </form>
    );
};
