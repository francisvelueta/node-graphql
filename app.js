const env = require('dotenv').config();
if (env.error) throw new Error('Env variables not found');
const express = require('express');
const app = express();

require('./helpers/db')()
require('./helpers/pipeline')(app);

module.exports = app;
