import express from 'express';
import _ from 'lodash';
import {ObjectID} from 'mongodb';

import { User } from './../models/user';
import { authenticate } from './../middleware/auth';

const router = express.Router();

router.post('/', (req, res) => {
  let body = _.pick(req.body, ['name', 'email', 'password']);
  let user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }, (e) => res.status(400).send(e));
});

router.get('/me', authenticate, (req, res) => {
  res.send(req.user);
});

router.post('/login', (req, res) => {
  let body = _.pick(req.body, ['name', 'email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

router.delete('/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => res.status(400).send());
});

router.delete('/me', authenticate, (req, res) => {
  User.findByIdAndRemove(req.user._id).then(() => {
    res.status(200).send();
  }, () => res.status(400).send());
});

module.exports = router;
