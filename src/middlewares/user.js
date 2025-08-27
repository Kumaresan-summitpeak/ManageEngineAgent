const { getUser } = require("../services/store");
/**
 * 
 * @param {*} context 
 * @param {*} state 
 * @returns {isAuthenticated,message}
 */
const userAuthentication = async (teamsChatId, type) => {

    try {

        const { status, user } = await getUser({ teamsChatId, type })
        if (status) {
            return { isAuthenticated: true, message: "User is authrnticated" }
        } else {
            return { isAuthenticated: false, message: "User is not authrnticated" }
        }

    } catch (error) {
        console.error("Error in user middleware", error);
        return { isAuthenticated: false, message: error.message }
    }
}

module.exports = { userAuthentication }