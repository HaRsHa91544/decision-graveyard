const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: [3, 'Title must be at least 3 characters']
    },
    title: {
        type: String,
        required: [true, 'Assumption is required'],
        trim: true,
        minlength: [3, 'Assumption must be at least 3 characters']
    },
    expectedOutcome: {
        type: String,
        required: [true, 'Expect Outcome is required'],
        trim: true,
        minlength: [3, 'Expect Outcome must be at least 3 characters']
    },
    confidence: {
        type: Number,
        required: [true, 'Confidence is required'],
        min: [0, 'Confidence must be in between 0-100'],
        max: [100, 'Confidence must be in between 0-100']
    },
    actualOutcome: {
        type: String,
        trim: true,
        minlength: [3, 'Actual Outcome must be at least 3 characters']
    },
    lessonLearnt: {
        type: String,
        trim: true,
        minlength: [3, 'Lesson you Learnt must be at least 3 characters']
    },
    status: {
        type: String,
        required: true,
        trim: true,
        enum: {
            values: ['Correct', 'Wrong', 'Pending'],
            message: 'Status must be Correct or Wrong or Pending'
        },
        default: 'Pending'
    }
}, { timestamps: true });

module.exports = mongoose.model("Decision", decisionSchema);