const mongoose = require("mongoose");
const getUserValidationMsgs = require('../utils/getUserValidationMsgs');

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: [true, getUserValidationMsgs('userId', 'required')],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, getUserValidationMsgs('email', 'required')],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            getUserValidationMsgs('email', 'match')
        ]
    },
    name: {
        type: String,
        required: [true, getUserValidationMsgs('name', 'required')],
        trim: true
    },
    profileURL: {
        type: String,
        required: [true, getUserValidationMsgs('profileURL', 'required')],
        trim: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
