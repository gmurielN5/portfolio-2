import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: process.env.OAUTH_ACCESS_TOKEN
    }
});

export const mailer = ({ name, email, subject, message }) => {
    const mail = {
        from: `${name} <${email}>`,
        to: process.env.MAIL_USERNAME,
        subject: `${subject}`,
        text: `${message}`,
        html: `<b>${message}</b>`
    };
    // Use the Transporter.sendMail method
    return new Promise((resolve, reject) => {
        transporter.sendMail(mail, (error, info) => (error ? reject(error) : resolve(info)));
    });
};
