const express = require('express');
const { swaggerSpecs, swaggerUi } = require('./swagger');
const tasksRouter = require('./routes/tasksRouter');
const errorHandler = require('./middleware/errorHandler');
const app = express();

// Middleware for serving static files and parsing JSON
app.use(express.static('./public'));
app.use(express.json());

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Routes
app.use('/api/v1/tasks', tasksRouter);

// Middleware for handling non-existent routes and error
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});
app.use(errorHandler);

module.exports = app;
