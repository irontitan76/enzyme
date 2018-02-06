import express from 'express';

import { Feed } from './../models/feed';
import _ from 'lodash';
import { ObjectID } from 'mongodb';
import { authenticate } from './../middleware/auth';

const router = express.Router();

router.get('/', (req, res) => {
  Feed.find({})
    .then(feeds => res.send(feeds))
    .catch(err => res.status(400).send(e));
});

router.post('/', authenticate, (req, res) => {
  let feed = new Feed({
    _submitterId: req.user._id,
    headline: req.body.headline,
    link: req.body.link
  });

  feed.save().then(doc => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

module.exports = router;
