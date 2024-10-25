const express = require('express');
const amqp = require('amqplib');

const app = express();
const PORT = 3002;
const QUEUE_NAME = 'message_queue';

app.use(express.json());

async function sendMessageToQueue(message) {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE_NAME, { durable: true });
        channel.sendToQueue(QUEUE_NAME, Buffer.from(message));
        console.log('Message sent to queue:', message);
        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error in sending message to queue:', error.message);
    }
}

app.post('/message', async (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).send({ error: 'Message is required' });
    }

    await sendMessageToQueue(message);
    res.send({ status: 'Message sent to queue' });
});

app.listen(PORT, () => {
    console.log(`Service C running on http://localhost:${PORT}`);
});
