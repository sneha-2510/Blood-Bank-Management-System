const express = require("express");
const {
    handleRegister,
    handleLogin,
    handleGetCurrentUser } = require("../controllers/auth.controller.js");
const authMiddleWare = require("../middlewares/authMiddleWare.js");


const router = express.Router();

//register
router.post("/register", handleRegister);

//login
router.post("/login", handleLogin)

//GET CURRENT USER
router.get("/current-user", authMiddleWare, handleGetCurrentUser)

module.exports = router
