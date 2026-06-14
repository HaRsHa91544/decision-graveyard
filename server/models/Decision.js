const mongoose = require('mongoose');
const getDecisionValidationMsgs = require('../utils/getDecisionValidationMsgs');

const decisionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, getDecisionValidationMsgs('title', 'required')],
        trim: true,
        minlength: [3, getDecisionValidationMsgs('title', 'minlength')]
    },
    assumption: {
        type: String,
        required: [true, getDecisionValidationMsgs('assumption', 'required')],
        trim: true,
        minlength: [3, getDecisionValidationMsgs('assumption', 'minlength')]
    },
    expectedOutcome: {
        type: String,
        required: [true, getDecisionValidationMsgs('expectedOutcome', 'required')],
        trim: true,
        minlength: [3, getDecisionValidationMsgs('expectedOutcome', 'minlength')]
    },
    confidence: {
        type: Number,
        required: [true, getDecisionValidationMsgs('confidence', 'required')],
        min: [0, getDecisionValidationMsgs('confidence', 'min')],
        max: [100, getDecisionValidationMsgs('confidence', 'max')]
    },
    actualOutcome: {
        type: String,
        trim: true,
        minlength: [3, getDecisionValidationMsgs('actualOutcome', 'minlength')]
    },
    lessonLearnt: {
        type: String,
        trim: true,
        minlength: [3, getDecisionValidationMsgs('lessonLearnt', 'minlength')]
    },
    status: {
        type: String,
        required: [true, getDecisionValidationMsgs('status', 'required')],
        trim: true,
        enum: {
            values: ['Correct', 'Wrong', 'Pending'],
            message: getDecisionValidationMsgs('status', 'enum')
        },
        default: 'Pending'
    }
}, { timestamps: true });

const Decision = mongoose.model("Decision", decisionSchema);
module.exports = Decision;