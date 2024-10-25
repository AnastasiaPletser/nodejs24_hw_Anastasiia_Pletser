const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/message', async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).send({ error: 'Message is required' });
    }

    try {
        await axios.post('http://localhost:3001/message-recieve', { message });
        res.send({ status: 'Message sent to Service B' });
    } catch (error) {
        console.error('Error sending message to Service B:', error.message);
        res.status(500).send({ error: 'Failed to send message to Service B' });
    }
});

app.listen(PORT, () => {
    console.log(`Service A running on http://localhost:${PORT}`);
});
