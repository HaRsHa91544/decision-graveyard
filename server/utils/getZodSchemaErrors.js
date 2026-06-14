const getZodSchemaErrors = (result) => {
    return result.error.issues.map(issue => ({
        field: issue.path.join(".") || 'Request has',
        message: issue.message
    }));
};

module.exports = getZodSchemaErrors;