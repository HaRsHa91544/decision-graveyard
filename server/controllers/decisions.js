const Decision = require('../models/Decision');

const sendResponse = require('../utils/sendResponse');
const getModelErrors = require('../utils/getModelErrors');
const handleErrors = require('../utils/handleErrors');


const getAllDecisions = async (req, res) => {
    try {
        const { userId } = req.user;
        const decisions = await Decision.find({ userId }).select('-userId');
        if (!decisions.length) return sendResponse(res, 200, true, 'Decisions are not found', decisions, null);
        return sendResponse(res, 200, true, 'All decisions are selected successfully!', decisions, null);
    }
    catch (error) {
        handleErrors(error, res);
    }
};


const addDecision = async (req, res) => {
    try {
        const { userId } = req.user;
        const decision = await Decision.create({ userId, ...req.body });
        return sendResponse(res, 201, true, 'Decision created successfully!');
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

        return sendResponse(res, 200, true, 'Decision outcome is updated successfully!');
    }
    catch (error) {
        handleErrors(error, res);
    }
};

module.exports = { getAllDecisions, addDecision, markOutcome };