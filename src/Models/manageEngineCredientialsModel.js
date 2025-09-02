const mongoose = require("mongoose");

/**
 * @description ManageEngine credientials schema for MongoDB
 */
const ManageEngineCredientialsSchema = new mongoose.Schema({

    accessToken: {
        type: String,
        trim: true
    },
    refreshToken: {
        type: String,
        trim: true
    },
    clientId: {
        type: String,
        trim: true
    },
    clientSecret: {
        type: String,
        trim: true
    },
    scope: {
        type: String,
        trim: true
    },
    helpDeskUrl: {
        type: String,
        trim: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("ManageEngineCredientials", ManageEngineCredientialsSchema);