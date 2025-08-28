

const summitChangesRequestTicket = async (context, state, data) => {
    try {

        console.log("summitChangesRequestTicket:", data);
        return "change request summit function called."

    } catch (error) {
        console.error("Error in summiting changes request ticket:", error);
        throw error;
    }
}


module.exports = {
    summitChangesRequestTicket
}