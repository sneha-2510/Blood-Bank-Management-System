const express = require("express");
const { handleRegister } = require("../controllers/auth.controller.js")

const router = express.Router();

//register
router.post("/register", handleRegister);

module.exports = router
