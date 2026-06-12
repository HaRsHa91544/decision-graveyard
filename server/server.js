const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

const { connectDB } = require('./config/database');

const PORT = process.env.PORT || 6900;

app.listen(PORT, async () => {
    await connectDB();
    console.log('Express Server Started at ' + PORT + '!');
});