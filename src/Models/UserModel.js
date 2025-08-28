const mongoose = require("mongoose");

/**
 * @description User schema for MongoDB
 */
const UserSchema = new mongoose.Schema({
    teamsChatId: {
        type: String,
        trim: true,
        required: true,
    },
    type: {
        type: String,
        trim: true,
        enumj: ["manageEngine"]
    },
    accessToken: {
        type: String,
        trim: true
    },
    refreshToken: {
        type: String,
        trim: true
    },
    loginUrl: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("User", UserSchema);