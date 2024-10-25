<!-- # Microservices Project
 
## Structure

- http/: folder for microservices that communicate via HTTP requests.
  - serviceA/: HTTP message sender.
  - serviceB/: recipient HTTP message.

  - queue/: folder for microservices that communicate via message queue (RabbitMQ).
  - serviceC/: sender of messages to the queue.
  - serviceD/: recipient of messages from the queue.


  ## Launch

- Make sure all dependencies are installed. Start each service with the node index.js command from the corresponding folder.
- Use docker-compose.yml to run RabbitMQ and all microservices simultaneously. -->

