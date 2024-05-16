const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected at port ${process.env.PORT}`)
    } catch (error) {
        console.log(`Mongodb Database error ${error}`);
    }
};

module.exports = connectDB;

