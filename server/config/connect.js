const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected at port ${PORT}`)
    } catch (error) {
        console.log(`Mongodb Database error ${error}`);
    }
};

module.exports = connectDB;

