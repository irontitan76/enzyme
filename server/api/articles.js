import express from 'express';

import { Article } from './../models/article';
import _ from 'lodash';
import { ObjectID } from 'mongodb';
import { authenticate } from './../middleware/auth';

const router = express.Router();

router.post('/', authenticate, (req, res) => {
  let article = new Article({
    _creator: {
      _id: req.user._id,
      name: req.user.name
    },
    _owner: {
      _id: req.user._id,
      name: req.user.name
    },
    category: req.body.category,
    title: req.body.title,
    text: req.body.text
  });

  article.save().then(doc => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

router.get('/', authenticate, (req, res) => {
  Article.find({ "_author._id": req.user._id })
    .then(articles => res.send(articles))
    .catch(err => res.status(400).send(e));
});

router.get('/:id', authenticate, (req, res) => {
  Article.findById(req.params.id, null, (err, article) => {
    res.status(200).send(article);
  }, e => res.status(400).send(e));
});

router.patch('/:id', authenticate, (req, res) => {
  const { id } = req.params;

  var body = _.pick(req.body, ['category', 'title', 'text', '_owner',
    '_submitter', 'submitted', 'submittedAt', '_collaborators']);

  if (!ObjectID.isValid(id)) return res.status(404).send();

  if (_.isBoolean(body.submitted) && body.submitted) {
    body.submittedAt = new Date().getTime();
  } else {
    body.submitted = false;
    body.submittedAt = null;
  }

  Article.findOneAndUpdate(
    { _id: id, "_creator._id": req.user._id},
    {$set: body},
    {new: true}
  ).then((article) => {
    if (!article) return res.status(404).send();
    res.send(article);
  }).catch(err => {
    res.status(400).send();
  });
});

router.delete('/:id', authenticate, (req, res) => {
  Article.findByIdAndRemove(req.params.id, (err, article) => {
    res.status(200).send(article);
  });
});

module.exports = router;
