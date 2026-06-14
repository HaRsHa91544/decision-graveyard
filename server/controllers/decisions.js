const Decision = require('../models/Decision');
const sendResponse = require('../utils/sendResponse');
const getModelErrors = require('../utils/getModelErrors');

const addDecision = async (req, res) => {
    try {
        const decision = await Decision.create(req.body);
        return sendResponse(res, 201, true, 'Decision created successfully!', decision);
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            const errors = getModelErrors(error);
            return sendResponse(res, 400, false, 'Decision inputs are invalid', null, errors);
        }
        return sendResponse(res, 500, false, 'Internal server error');
    }
};

module.exports = { addDecision };