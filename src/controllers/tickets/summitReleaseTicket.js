

const summitReleaseRequestTicket = async (context, state, data) => {
    try {

        console.log("summitReleaseRequestTicket:", data);
        return "Release request summit function called."

    } catch (error) {
        console.error("Error in summiting Release request ticket:", error);
        throw error;
    }
}


module.exports = {
    summitReleaseRequestTicket
}