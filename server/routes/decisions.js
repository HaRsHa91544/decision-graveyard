const express = require('express');
const router = express.Router();

const validation = require('../middlewares/validation');

const authToken = require('../middlewares/auth');

const { addDecisionValidation, markOutcomeValidation } = require('../validators/decision');
const { getAllDecisions, addDecision, markOutcome } = require('../controllers/decisions');

router.use(authToken);

router.get('/', getAllDecisions);
router.post('/add-decision', validation(addDecisionValidation), addDecision);
router.patch('/mark-outcome', validation(markOutcomeValidation), markOutcome);

module.exports = { decisionsRouter: router };