

const summitProblemsRequestTicket = async (context, state, data) => {
    try {

        console.log("summitProblemsRequestTicket:", data);
        return "Problems request summit function called."

    } catch (error) {
        console.error("Error in summiting problems request ticket:", error);
        throw error;
    }
}


module.exports = {
    summitProblemsRequestTicket
}