const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authToken = require('../middlewares/auth');

const { authRouter } = require('../routes/auth');
const { decisionsRouter } = require('../routes/decisions');

const app = express();

// middlewares
app.use(cors({ origin: 'http://localhost:5500', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(authToken);

// routes
app.use('/auth', authRouter);
app.use('/decisions', decisionsRouter);

module.exports = app;