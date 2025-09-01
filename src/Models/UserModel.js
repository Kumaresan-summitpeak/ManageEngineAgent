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
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    sub: {
        type: String,
        trim: true
    },
    aud: {
        type: String,
        trim: true
    },
    emailVerified: {
        type: Boolean
    },
    email: {
        type: String,
        trim: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("User", UserSchema);