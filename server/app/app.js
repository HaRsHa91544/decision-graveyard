const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { rateLimit } = require('express-rate-limit');
const { default: mongoose } = require('mongoose');

const authToken = require('../middlewares/auth');

const sendResponse = require('../utils/sendResponse');

const { authRouter } = require('../routes/auth');
const { decisionsRouter } = require('../routes/decisions');

const app = express();

const { CLIENT_URL } = process.env;


// middlewares
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(rateLimit(
    {
        windowMs: 15 * 60 * 1000,
        limit: 100,
        message: { success: false, message: 'Requests limit reached, Try after 15 mins!' }
    }
));


// routes
app.get('/health', (req, res) => {
    sendResponse(res, 200, true, 'Everything is Fine!',
        {
            database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        }
    );
});
app.use('/auth', authRouter);
app.use('/decisions', decisionsRouter);

module.exports = app;