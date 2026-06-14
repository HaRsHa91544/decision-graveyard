const getZodSchemaErrors = require('../utils/getZodSchemaErrors');
const sendResponse = require("../utils/sendResponse");

const validation = (schema) => {
    return (req, res, next) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            return sendResponse(
                res,
                400,
                false,
                'Decision inputs are invalid',
                null,
                getZodSchemaErrors(result)
            );
        }

        next();
    }
};

module.exports = validation;