const Decision = require('../models/Decision');

const addDecision = async (req, res) => {
    await Decision.create({
        title: 'harsha',
        assumption: 'vardhan',
        expectedOutcome: 'none',
        confidence: 100,
        status: 'Pending'
    });
    res.send('Decision Created!');
};

module.exports = { addDecision };