const express = require('express');
const router = express.Router();

const validation = require('../middlewares/validation');

const { addDecision } = require('../controllers/decisions');
const { addDecisionValidation } = require('../validators/decision');


router.post('/add-decision', validation(addDecisionValidation), addDecision);

module.exports = { decisionsRouter: router };