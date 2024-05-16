const express = require('express');
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require('./config/connect');

//dot config
dotenv.config();

//mongodb connection
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


//routes
app.use("/api/test", require("./routes/testRoutes"));
app.use("/api/auth", require("./routes/auth.route.js"));


//port 
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`Node server running in ${process.env.DEV_MODE} mode on port ${PORT}`);
})