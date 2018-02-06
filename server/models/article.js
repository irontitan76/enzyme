import mongoose from 'mongoose';

const CollaboratorSchema = new mongoose.Schema({
  _user: { type: String },
  permission: { type: String }
});

const AuthorSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const ArticleSchema = new mongoose.Schema({
  _creator: AuthorSchema,
  _owner: AuthorSchema,
  createdAt: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    uppercase: true,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  _submitter: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  submitted: {
    type: Boolean,
    default: false
  },
  submittedAt: {
    type: Date,
    default: null
  },
  _collaborators: {
    type: [CollaboratorSchema],
    default: []
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = { Article }
