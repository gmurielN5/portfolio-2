import axios from 'axios';

export const sendEmail = async (data) => {
    try {
        const response = await axios.post('api/contact', data, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
