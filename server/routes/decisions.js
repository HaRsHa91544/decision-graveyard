const express = require('express');
const router = express.Router();

const validation = require('../middlewares/validation');

const { addDecision, markOutcome } = require('../controllers/decisions');
const { addDecisionValidation, markOutcomeValidation } = require('../validators/decision');

router.post('/add-decision', validation(addDecisionValidation), addDecision);
router.patch('/mark-outcome', validation(markOutcomeValidation), markOutcome);

module.exports = { decisionsRouter: router };