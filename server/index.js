const express = require('express');
const dotenv = require("dotenv");
const connectDB = require('./config/connect');

//dot config
dotenv.config();

//mongodb connection
connectDB();

const app = express();

//middlewares
app.use(express.json());


//routes
app.use("/api/test", require("./routes/testRoutes"));


//port 
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
})