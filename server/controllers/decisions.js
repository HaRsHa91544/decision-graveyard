const Decision = require('../models/Decision');

const sendResponse = require('../utils/sendResponse');
const getModelErrors = require('../utils/getModelErrors');
const handleErrors = require('../utils/handleErrors');


const getAllDecisions = async (req, res) => {
    try {
        // Get the decisions which are specific to an user using JWT token
        const decisions = await Decision.find();
        sendResponse(res, 200, true, 'All decisions are selected successfully!', decisions, null);
    }
    catch (error) {
        handleErrors(error, res);
    }
};


const addDecision = async (req, res) => {
    try {
        const decision = await Decision.create(req.body);
        return sendResponse(res, 201, true, 'Decision created successfully!', decision);
    }
    catch (error) {
        handleErrors(error, res);
    }
};


const markOutcome = async (req, res) => {
    try {
        const { id, actualOutcome, lessonLearnt, status } = req.body;

        const decision = await Decision.findByIdAndUpdate(id, {
            actualOutcome,
            lessonLearnt,
            status
        }, { runValidators: true });

        if (!decision) {
            return sendResponse(res, 404, false, 'Decision is not found to update', null);
        }

        return sendResponse(res, 200, true, 'Decision outcome is updated successfully!', decision);
    }
    catch (error) {
        handleErrors(error, res);
    }
};

module.exports = { getAllDecisions, addDecision, markOutcome };