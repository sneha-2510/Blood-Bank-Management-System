const userModel = require("../models/user.model.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const handleRegister = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });

        if (existingUser) {
            return res.status(400).send(
                {
                    message: "User already exists", success: false

                })
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(201).send({
            success: true,
            message: "User registered Successfully",
            newUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Please provide all details",
            error
        })
    }
}

const handleLogin = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Invalid Credentials "
            })
        }

        if (user.role !== req.body.role) {
            return res.status(500).send({
                success: false,
                message: "Role does not match."
            })
        }

        const comparePassword = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!comparePassword) {
            return res.status(500).send({
                success: false,
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        })

        return res.status(200).send({
            success: true,
            message: "Login Successfully",
            token,
            user
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login API",
            error
        })
    }
}

//GET CURRENT USER
const handleGetCurrentUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.body.userId });
        return res.status(200).send({
            success: true,
            message: "User Fetched Successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "unable to get current user",
            error,
        });
    }
};

module.exports = {
    handleRegister,
    handleLogin,
    handleGetCurrentUser
}