const userModel = require("../models/user.model.js");

//GET DONAR LIST
const handleGetDonarsList = async (req, res) => {
    try {
        const donarData = await userModel
            .find({ role: "donar" })
            .sort({ createdAt: -1 });

        return res.status(200).send({
            success: true,
            Toatlcount: donarData.length,
            message: "Donar List Fetched Successfully",
            donarData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Donar List API",
            error,
        });
    }
};
//GET HOSPITAL LIST
const handleGetHospitalList = async (req, res) => {
    try {
        const hospitalData = await userModel
            .find({ role: "hospital" })
            .sort({ createdAt: -1 });

        return res.status(200).send({
            success: true,
            Toatlcount: hospitalData.length,
            message: "HOSPITAL List Fetched Successfully",
            hospitalData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In Hospital List API",
            error,
        });
    }
};
//GET ORG LIST
const handleGetOrgList = async (req, res) => {
    try {
        const orgData = await userModel
            .find({ role: "organisation" })
            .sort({ createdAt: -1 });

        return res.status(200).send({
            success: true,
            Toatlcount: orgData.length,
            message: "ORG List Fetched Successfully",
            orgData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error In organization List API",
            error,
        });
    }
};
// =======================================

//DELETE DONAR
const handleDeleteDonar = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: " Record Deleted successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error while deleting ",
            error,
        });
    }
};

//EXPORT
module.exports = {
    handleGetDonarsList,
    handleGetHospitalList,
    handleGetOrgList,
    handleDeleteDonar,
};
