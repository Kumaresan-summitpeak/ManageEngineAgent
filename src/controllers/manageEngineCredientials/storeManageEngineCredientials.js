const ManageEngineCredientialsSchema = require("../../Models/ManageEngineCredientialsModel")

const storeManageEngineCredientials = async (req, res) => {
    try {

        const manageEngineCredientials = await ManageEngineCredientialsSchema.create(req.body)
        return res.status(200).json({ status: true, statusCode: 200, message: "Manage engine credientials created successfully.", data: manageEngineCredientials })
    } catch (error) {
        console.error("Error in storing manageengine credientials.", error);
        return res.status(500).json({ status: false, statusCode: 200, message: error.message })
    }
}

module.exports = {
    storeManageEngineCredientials
}