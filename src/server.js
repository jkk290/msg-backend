require('dotenv').config();
const express = require('express');

const app = express();

app.get('/api', (req, res) => res.send('Hello, world!'));

module.exports = app;