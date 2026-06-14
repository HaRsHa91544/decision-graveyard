const getModelErrors = ({ errors }) => {
    const keys = Object.keys(errors);
    const values = Object.values(errors);

    const errorsArray = keys.map((key, index) => {
        return { field: key, message: values[index].message }
    });

    return errorsArray;
};

module.exports = getModelErrors;