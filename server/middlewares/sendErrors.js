const getModelErrors = require('../utils/getModelErrors');
const sendResponse = require('../utils/sendResponse');

const sendErrors = async (req, res) => {
    if (error.name === 'ValidationError') {
        const errors = getModelErrors(error);
        return sendResponse(res, 400, false, 'Decision inputs are invalid', null, errors);
    }
    return sendResponse(res, 500, false, 'Internal server error');
};

module.exports = sendErrors;