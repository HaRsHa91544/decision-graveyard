const express = require('express');
const cors = require('cors');

const { authRouter } = require('../routes/auth');
const { decisionsRouter } = require('../routes/decisions');

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/auth', authRouter);
app.use('/decisions', decisionsRouter);

module.exports = app;