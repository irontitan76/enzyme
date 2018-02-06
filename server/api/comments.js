import express from 'express';

import { Comment } from './../models/comment';
import _ from 'lodash';
import { ObjectID } from 'mongodb';
import { authenticate } from './../middleware/auth';

const router = express.Router();

router.get('/', authenticate, (req, res) => {
  Comment.find({})
    .then(comments => res.send(comments))
    .catch(err => res.status(400).send(e));
});

router.post('/', authenticate, (req, res) => {
  let comment = new Comment({
    _author: {
      _id: req.user._id,
      name: req.user.name
    },
    article_id: req.body.article_id,
    parent_id: req.body.parent_id,
    text: req.body.text,
    slug: req.body.slug,
    full_slug: req.body.full_slug
  });

  comment.save().then(doc => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

router.patch('/:id', authenticate, (req, res) => {
  const { id } = req.params;

  var body = _.pick(req.body, ['text']);

  if (!ObjectID.isValid(id)) return res.status(404).send();
  
  Comment.findOneAndUpdate(
    { _id: id, "_author._id": req.user._id},
    {$set: body},
    {new: true}
  ).then(comment => {
    if (!comment) return res.status(404).send();
    res.send(comment);
  }).catch(err => {
    res.status(400).send();
  });
});

module.exports = router;
