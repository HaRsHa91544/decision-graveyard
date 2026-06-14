const express = require('express');
const { decisionsRouter } = require('../routes/decisions');

const app = express();

// middlewares
app.use(express.json());

// routes
app.use(decisionsRouter);

module.exports = app;