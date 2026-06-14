const { z } = require('zod');
const getDecisionValidationMsgs = require('../utils/getDecisionValidationMsgs');

const addDecisionValidation = z.object({
    title: z
        .string({ error: getDecisionValidationMsgs('title', 'required') })
        .min(3, getDecisionValidationMsgs('title', 'minlength')),
    assumption: z
        .string({ error: getDecisionValidationMsgs('assumption', 'required') })
        .min(3, getDecisionValidationMsgs('assumption', 'minlength')),
    expectedOutcome: z
        .string({ error: getDecisionValidationMsgs('expectedOutcome', 'required') })
        .min(3, getDecisionValidationMsgs('expectedOutcome', 'minlength')),
    confidence: z
        .number({ error: getDecisionValidationMsgs('confidence', 'required') })
        .min(0, getDecisionValidationMsgs('confidence', 'min'))
        .max(100, getDecisionValidationMsgs('confidence', 'max')),
    status: z
        .enum(['Correct', 'Wrong', 'Pending'], { error: getDecisionValidationMsgs('status', 'enum') })
        .default('Pending')
}, { error: 'Invalid inputs' });

module.exports = { addDecisionValidation };