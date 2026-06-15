const express = require('express');
const router = express.Router();

const validation = require('../middlewares/validation');

const { getAllDecisions, addDecision, markOutcome } = require('../controllers/decisions');
const { addDecisionValidation, markOutcomeValidation } = require('../validators/decision');

router.get('/decisions', getAllDecisions);
router.post('/add-decision', validation(addDecisionValidation), addDecision);
router.patch('/mark-outcome', validation(markOutcomeValidation), markOutcome);

module.exports = { decisionsRouter: router };