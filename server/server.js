import './config/config';
import compression from 'compression';
import express from 'express';
import http from 'http';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { resolve, join } from 'path';
import fs from 'fs';
import api from './api';
import { mongoose } from './db/mongoose';

const app = express()
  .use(compression())
  .use(cookieParser())
  .use(morgan('dev'))
  .use(bodyParser.json());

// REST API
app.use('/api', api);

// UI
app.use('/', express.static(join(__dirname, './../dist')));
app.get('/*', (req, res) => {
  res.sendFile(resolve(join(__dirname, './../dist/index.html')));
});

const PORT = process.env.PORT;
const server = http.createServer(app);
server.listen(PORT);

const io = require('socket.io')();
io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
io.listen(server);

console.log(`Server started at http://localhost:${PORT}`);
