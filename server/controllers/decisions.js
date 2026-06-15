const Decision = require('../models/Decision');
const sendResponse = require('../utils/sendResponse');
const getModelErrors = require('../utils/getModelErrors');

const getAllDecisions = async (req, res) => {
    try {
        // Get the decisions which are specific to an user using JWT token
        const decisions = await Decision.find();
        sendResponse(res, 200, true, 'All decisions selected successfully!', decisions, null);
    }
    catch (error) {
        if (error.name === 'ValidationError') {
            const errors = getModelErrors(error);
            return sendResponse(res, 400, false, 'Decision inputs are invalid', null, errors);
        }
        return sendResponse(res, 500, false, 'Internal server error');
    }
};

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


const markOutcome = async (req, res) => {
    try {
        const { id, actualOutcome, lessonLearnt, status, } = req.body;
        const decision = await Decision.findByIdAndUpdate(id, {
            actualOutcome,
            lessonLearnt,
            status
        });
        return sendResponse(res, 200, true, 'Decision outcome updated successfully!', decision);
    } catch (error) {
        if (error.name === 'ValidationError') {
            const errors = getModelErrors(error);
            return sendResponse(res, 400, false, 'Decision inputs are invalid', null, errors);
        }
        return sendResponse(res, 500, false, 'Internal server error');
    }
};

module.exports = { getAllDecisions, addDecision, markOutcome };