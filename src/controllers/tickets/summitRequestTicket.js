

const summitRequestTicket = async (context, state, data) => {
    try {

        console.log("summitRequestTicket:", data);
        return "Requestes summit function called."

    } catch (error) {
        console.error("Error in summiting request ticket:", error);
        throw error;
    }
}


module.exports = {
    summitRequestTicket
}