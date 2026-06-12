const express = require('express');
const router = express.Router();

const { addDecision } = require('../controllers/decisions');

router.get('/add-decision', addDecision);

module.exports = { decisionsRouter: router };