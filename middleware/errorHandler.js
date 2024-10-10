const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.name === 'ValidationError') {
    // Handle Mongoose validation errors
    const messages = Object.values(err.errors).map((err) => err.message);
    return res.status(400).json({ errors: messages });
  }
  // Handle other errors
  res.status(500).json({ message: 'Server Error' });
};

module.exports = errorHandler;