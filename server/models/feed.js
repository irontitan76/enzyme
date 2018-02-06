import mongoose from 'mongoose';

const FeedSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: true
  },
  link: {
    type: String
  },
  _submitterId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

const Feed = mongoose.model('Feed', FeedSchema);

module.exports = { Feed };
