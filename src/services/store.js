const User = require("../Models/UserModel");

const storeUser = async (data = {}) => {
    try {
        const { teamsChatId, type } = data;

        // It will find the user based on teams chat id if the user is not it will create else it will update.
        const user = await User.findOneAndUpdate(
            { teamsChatId, type },
            data,
            { new: true, upsert: true }
        )

        if (user) {
            return { status: true, user }
        } else {
            return { status: false, user: null }
        }
    } catch (error) {
        console.error("Error in store user:", error);
        throw error;
    }
}

const getUser = async (data = {}) => {
    try {
        const { teamsChatId, type } = data;

        // It will find the user based on teams chat id if the user is not it will create else it will update.
        const user = await User.findOne(
            { teamsChatId, type }
        )

        if (user) {
            return { status: true, user }
        } else {
            return { status: false, user: null }
        }
    } catch (error) {
        console.error("Error in get user:", error);
        throw error;
    }
}

module.exports = {
    getUser, storeUser
}