const express = require('express');

const router = express.Router();

const validation = require('../middlewares/validation');

const { googleAuthValidaton } = require('../validators/auth');

const { googleAuth } = require("../controllers/auth");

router.post('/google', validation(googleAuthValidaton), googleAuth);

module.exports = { authRouter: router };