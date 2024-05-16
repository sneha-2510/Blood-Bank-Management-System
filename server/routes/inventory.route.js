const express = require("express");
const authMiddleWare = require("../middlewares/authMiddleWare");
const { handleCreateInventory, handleGetInventory, handleGetInventoryHospital, handleGetRecentInventory, handleGetDonars, handleGetHospital, handleGetOrgnaisation, handleGetOrgnaisationForHospital } = require("../controllers/inventory.controller");

const router = express.Router();

//add inventory
router.post("/create-inventory", authMiddleWare, handleCreateInventory)

//get all blood records
router.get("/get-inventory", authMiddleWare, handleGetInventory)

//GET RECENT BLOOD RECORDS
router.get(
    "/get-recent-inventory",
    authMiddleWare,
    handleGetRecentInventory
);

//GET HOSPITAL BLOOD RECORDS
router.post(
    "/get-inventory-hospital",
    authMiddleWare,
    handleGetInventoryHospital
);

//GET DONAR RECORDS
router.get("/get-donars", authMiddleWare, handleGetDonars);

//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleWare, handleGetHospital);

//GET orgnaisation RECORDS
router.get("/get-orgnaisation", authMiddleWare, handleGetOrgnaisation);

//GET orgnaisation RECORDS
router.get(
    "/get-orgnaisation-for-hospital",
    authMiddleWare,
    handleGetOrgnaisationForHospital
);


module.exports = router