import { useState } from 'react';

import { sendEmail } from '../../lib/api';

import { Message } from './Messages';
import { Form } from './Form';

import styles from './styles.module.css';

const initalValues = { name: '', email: '', subject: '', message: '' };
const initialState = { values: initalValues };

export const Footer = () => {
    const [form, setForm] = useState(initialState);
    const { values, msg } = form;

    const onSubmit = async (e) => {
        e.preventDefault();
        setForm((prev) => ({
            ...prev,
            isLoading: true
        }));

        const res = await sendEmail(values);
        const { message } = res;
        setForm((prev) => ({
            ...prev,
            isLoading: false,
            msg: message.msgBody
        }));

        if (!message.msgError) {
            setForm(initialState);
        }
    };

    return (
        <footer className={styles.footer} id="footer" data-scroll-section>
            <div className={styles.message}>
                <Message message={msg} />
            </div>

            <div className={styles.form}>
                <Form form={form} setForm={setForm} onSubmit={onSubmit} />
            </div>
        </footer>
    );
};
