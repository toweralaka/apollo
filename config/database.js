require('dotenv').config(); // Load environment variables from .env file

const mongoose = require('mongoose');

const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
  console.log('Successfully connected to database - MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
}


module.exports = connectDB;