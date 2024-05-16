const express = require("express");
const authMiddelware = require("../middlewares/authMiddleWare");
const {
    handleBloodGroupDetails
} = require("../controllers/analytics.controller");

const router = express.Router();

//routes

//GET BLOOD DATA
router.get("/bloodGroups-data", authMiddelware, handleBloodGroupDetails);

module.exports = router;
