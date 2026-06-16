const { z } = require("zod");
const getUserValidationMsgs = require("../utils/getUserValidationMsgs");

const googleAuthValidaton = z.object({
    token: z
        .string({ error: getUserValidationMsgs('token', 'required') })
        .trim()
}, { error: 'Request is invalid' });

module.exports = { googleAuthValidaton };