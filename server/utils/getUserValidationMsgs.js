const getUserValidationMsgs = (field, attribute) => {
    if (field === 'token') {
        if (attribute === 'required') return 'Google OAuth token is required';
        else return '';
    }
    else if (field === 'userId') {
        if (attribute === 'required') return 'User ID is required';
        else return '';
    }

    else if (field === 'email') {
        if (attribute === 'required') return 'Email is required';
        else if (attribute === 'match') return 'Email is invalid';
        else return '';
    }

    else if (field === 'name') {
        if (attribute === 'required') return 'Name is required';
        else return '';
    }

    else if (field === 'profileURL') {
        if (attribute === 'required') return 'Profile URL is required';
        else if (attribute === 'match') return 'Profile URL is invalid';
        else return '';
    }

    else return '';
};

module.exports = getUserValidationMsgs; 