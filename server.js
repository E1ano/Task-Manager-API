const dotenv = require('dotenv');
const app = require('./app');
const { connectToDatabase } = require('./database/connect');

// Load environment variables from config.env
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT || 3000;
const DATABASE = process.env.DATABASE.replace(
  '<db_password>',
  process.env.MONGODB_PASSWORD
);

const startServer = async () => {
  try {
    // Connect to the database
    await connectToDatabase(DATABASE);
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Terminate the process if the database fails to connect
  }
};

startServer();