const userModel = require("../models/user.model.js")
const bcrypt = require("bcrypt")

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
            message: "error in register API",
            error
        })
    }
}

module.exports = {
    handleRegister
}