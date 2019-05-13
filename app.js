const config = require('dotenv').config();
if (config.error) throw new Error('Env variables not found');
const express = require('express');
const app = express();

require('./helpers/pipeline')(app);

module.exports = app;