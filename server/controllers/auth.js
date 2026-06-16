const { OAuth2Client } = require("google-auth-library");
const jwt = require('jsonwebtoken');

const sendResponse = require("../utils/sendResponse");
const handleErrors = require("../utils/handleErrors");

const User = require("../models/User");

const client = new OAuth2Client();

const { GOOGLE_OAUTH_CLIENT_ID, JWT_SECRET_KEY, NODE_ENV } = process.env;

const googleAuth = async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: GOOGLE_OAUTH_CLIENT_ID
        });

        const payload = await ticket.getPayload();
        const { sub: userId, name, email, picture: profileURL } = payload;

        let user = await User.findOne({ userId, email });
        if (!user) {
            user = User.create({ userId, name, email, profileURL });
        }

        const jwtToken = jwt.sign(
            { userId, name, email },
            JWT_SECRET_KEY,
            { expiresIn: 1000 * 60 * 60 * 24 }
        );

        res.cookie('dg_access', jwtToken, {
            httpOnly: true,
            secure: NODE_ENV === 'production',
            sameSite: NODE_ENV === 'production' ? 'none' : 'lax',
            maxAge: 1000 * 60 * 60 * 24 // 1 Day
        });

        sendResponse(res, 200, true,
            'User authenticated successfully!',
            { name, profileURL },
            null
        );
    }
    catch (error) {
        handleErrors(error, res);
    }
};

module.exports = { googleAuth };