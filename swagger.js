const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Task Manager API', // Title of the API
      version: '1.0.0', // Version of the API
      description: 'API documentation for task management', // Description of the API
      contact: {
        name: 'Marko', // Your name
        email: 'andrusyakmarko28@gmail.com', // Your email
      },
    },
    servers: [
      {
        url: 'http://localhost:3000', // Your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs (files that contain JSDoc comments)
};

// Initialize swagger-jsdoc
const swaggerSpecs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerSpecs, swaggerUi };