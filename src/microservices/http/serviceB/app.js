const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/message-recieve', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).send({ error: 'Message is required' });
    }

    console.log('Received message:', message);
    res.send({ status: 'Message received' });
});

app.listen(PORT, () => {
    console.log(`Service B running on http://localhost:${PORT}`);
});
