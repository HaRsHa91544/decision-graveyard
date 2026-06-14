const getDecisionValidationMsgs = (field, attribute) => {
    if (field === 'title') {
        if (attribute === 'required') {
            return 'Title is required';
        }
        else if (attribute === 'minlength') {
            return 'Title must be at least 3 characters'
        }
        else {
            return '';
        }
    }

    else if (field === 'assumption') {
        if (attribute === 'required') {
            return 'Assumption is required';
        }
        else if (attribute === 'minlength') {
            return 'Assumption must be at least 3 characters'
        }
        else {
            return '';
        }
    }

    else if (field === 'expectedOutcome') {
        if (attribute === 'required') {
            return 'Expect Outcome is required';
        }
        else if (attribute === 'minlength') {
            return 'Expect Outcome must be at least 3 characters'
        }
        else {
            return '';
        }
    }

    else if (field === 'confidence') {
        if (attribute === 'required') {
            return 'Confidence is required';
        }
        else if (attribute === 'min' || attribute === 'max') {
            return 'Confidence must be in between 0-100'
        }
        else {
            return '';
        }
    }

    else if (field === 'actualOutcome') {
        if (attribute === 'required') {
            return 'Actual Outcome is required';
        }
        else if (attribute === 'minlength') {
            return 'Actual Outcome must be at least 3 characters';
        }
        else {
            return '';
        }
    }

    else if (field === 'lessonLearnt') {
        if (attribute === 'required') {
            return 'Lesson you learnt is required';
        }
        else if (attribute === 'minlength') {
            return 'Lesson you Learnt must be at least 3 characters';
        }
        else {
            return '';
        }
    }

    else if (field === 'status') {
        if (attribute === 'required') {
            return 'Status is required';
        }
        else if (attribute === 'enum') {
            return 'Status must be Correct or Wrong or Pending';
        }
        else {
            return '';
        }
    }

    else {
        return '';
    }
};

module.exports = getDecisionValidationMsgs;