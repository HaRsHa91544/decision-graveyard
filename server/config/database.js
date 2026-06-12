const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to your MongoDB Cluster!');
    }
    catch (error) {
        console.log('Error occurred while connecting to dB, ', error);
    }
}

module.exports = { connectDB };