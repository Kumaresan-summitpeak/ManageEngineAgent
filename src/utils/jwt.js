const jwt = require("jsonwebtoken");

const jwtDecode = async (token) => {
    try {

        const decode=jwt.decode(token)
        return decode
    } catch (error) {
        console.error("Error in jwt decode:", error);
        throw error;
    }
}

module.exports = {
    jwtDecode
}