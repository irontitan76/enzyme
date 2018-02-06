import express from 'express';

const router = express.Router()
  .use('/users', require('./users'))
  .use('/articles', require('./articles'))
  .use('/comments', require('./comments'))
  .use('/feeds', require('./feeds'));

export default router;
