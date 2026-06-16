const jwt = require('jsonwebtoken');
const sendResponse = require("../utils/sendResponse");
const User = require('../models/User');

const { JWT_SECRET_KEY } = process.env;

const authToken = async (req, res, next) => {
    try {
        const { dg_access: token } = req.cookies;
        if (!token) return sendResponse(res, 401, false, 'Authorization token is not found!');

        const { userId, email, name } = jwt.verify(token, JWT_SECRET_KEY);

        const user = await User.findOne({ userId, email });
        req.user = { userId, email, name };
        
        next();
    }
    catch (error) {
        return sendResponse(res, 401, false, 'Authorization is failed!');
    }
};

module.exports = authToken;