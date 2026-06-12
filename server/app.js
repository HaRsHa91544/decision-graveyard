const express = require('express');
const { decisionsRouter } = require('./routes/decisions');
const app = express();

app.use(decisionsRouter);

module.exports = app;