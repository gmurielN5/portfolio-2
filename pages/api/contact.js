import { mailer } from '../../config/nodemailer';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res
                .status(403)
                .send({ message: { msgBody: 'Please fill out all fields.', msgError: true } });
        }

        try {
            await mailer({ name, email, subject, message });
            return res
                .status(200)
                .send({ message: { msgBody: 'Thanks for your message', msgError: false } });
        } catch (error) {
            console.log(error);
            return res.status(400).send({
                message: { msgBody: error.message, msgError: true }
            });
        }
    }
    res.status(400).json({
        message: { msgBody: 'An error occured.Please try again', msgError: true }
    });
};

export default handler;
