const express = require("express");
const authMiddelware = require("../middlewares/authMiddleWare");
const {
    handleGetDonarsList,
    handleGetHospitalList,
    handleGetOrgList,
    handleDeleteDonar,
} = require("../controllers/admin.controller");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//GET || DONAR LIST
router.get(
    "/donar-list",
    authMiddelware,
    adminMiddleware,
    handleGetDonarsList
);
//GET || HOSPITAL LIST
router.get(
    "/hospital-list",
    authMiddelware,
    adminMiddleware,
    handleGetHospitalList
);
//GET || ORG LIST
router.get("/org-list", authMiddelware, adminMiddleware, handleGetOrgList);
// ==========================

// DELETE DONAR || GET
router.delete(
    "/delete-donar/:id",
    authMiddelware,
    adminMiddleware,
    handleDeleteDonar
);

//EXPORT
module.exports = router;
