const express = require('express');
const amqp = require('amqplib');

const app = express();
const PORT = 3003;
const QUEUE_NAME = 'message_queue';

async function consumeMessages() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue(QUEUE_NAME, { durable: true });

        console.log('Waiting for messages in queue...');

        channel.consume(QUEUE_NAME, (msg) => {
            if (msg !== null) {
                const message = msg.content.toString();
                console.log('Received message:', message);
                channel.ack(msg);
            }
        });
    } catch (error) {
        console.error('Error in consuming messages:', error.message);
    }
}

consumeMessages();

app.listen(PORT, () => {
    console.log(`Service D running on http://localhost:${PORT}`);
});
