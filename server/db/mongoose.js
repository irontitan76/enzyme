import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })
  .then(() => console.log('Database connection successful'))
  .catch((err) => console.error(err));

module.exports = { mongoose };
