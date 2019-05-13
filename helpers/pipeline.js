const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const error = require('../middleware/error');
const graphHttp = require('../graphql/');

module.exports = app => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(helmet());
  if (app.get('env') === 'development') app.use(require('morgan')('dev'));
  app.get('/', (req, res) => res.send('Node-Express backend online'));
  app.use('/graphql', graphHttp);
  app.use(error);
}