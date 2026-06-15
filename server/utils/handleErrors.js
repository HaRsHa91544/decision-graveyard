const getModelErrors = require("./getModelErrors");
const sendResponse = require("./sendResponse");

const handleErrors = (error, res) => {
    if (error.name === 'ValidationError') {
        const errors = getModelErrors(error);
        return sendResponse(res, 400, false, 'Decision inputs are invalid', null, errors);
    }
    else if (error.name === 'CastError') {
        return sendResponse(res, 404, false, 'Decision is not found to update', null);
    }
    return sendResponse(res, 500, false, 'Internal server error', null, null);
};

module.exports = handleErrors;