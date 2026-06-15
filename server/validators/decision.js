const { z } = require('zod');
const getDecisionValidationMsgs = require('../utils/getDecisionValidationMsgs');

const addDecisionValidation = z.object({
    title: z
        .string({ error: getDecisionValidationMsgs('title', 'required') })
        .trim()
        .min(3, getDecisionValidationMsgs('title', 'minlength')),
    assumption: z
        .string({ error: getDecisionValidationMsgs('assumption', 'required') })
        .trim()
        .min(3, getDecisionValidationMsgs('assumption', 'minlength')),
    expectedOutcome: z
        .string({ error: getDecisionValidationMsgs('expectedOutcome', 'required') })
        .trim()
        .min(3, getDecisionValidationMsgs('expectedOutcome', 'minlength')),
    confidence: z
        .number({ error: getDecisionValidationMsgs('confidence', 'required') })
        .min(0, getDecisionValidationMsgs('confidence', 'min'))
        .max(100, getDecisionValidationMsgs('confidence', 'max')),
    status: z
        .enum(['Correct', 'Wrong', 'Pending'], { error: getDecisionValidationMsgs('status', 'enum') })
        .default('Pending')
}, { error: 'Invalid inputs' });


const markOutcomeValidation = z.object({
    id: z
        .string({ error: getDecisionValidationMsgs('id', 'required') }),
    actualOutcome: z
        .string({ error: getDecisionValidationMsgs('actualOutcome', 'required') })
        .trim()
        .min(3, getDecisionValidationMsgs('actualOutcome', 'minlength')),
    lessonLearnt: z
        .string({ error: getDecisionValidationMsgs('lessonLearnt', 'required') })
        .trim()
        .min(3, getDecisionValidationMsgs('lessonLearnt', 'minlength')),
    status: z
        .enum(['Correct', 'Wrong'], { error: getDecisionValidationMsgs('status', 'enum') })
}, { error: 'Invalid inputs' });


module.exports = { addDecisionValidation, markOutcomeValidation };