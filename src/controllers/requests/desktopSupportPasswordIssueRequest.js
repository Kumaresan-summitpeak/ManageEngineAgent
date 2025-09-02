const { manageEngineHttpRequest } = require("../../axios/httpRequest");
const qs = require("qs");
const env = require("../../config");

/**
 * 
 * @param {*} context 
 * @param {*} state 
 * @param {*} data 
 * @returns "Text based message with create data"
 */
const desktopSupportPasswordIssueRequest = async (context, state, data) => {
    try {
        const { ZohoManageEngineUrl } = env;

        console.log("desktopSupportPasswordIssueRequestDaata:", data)
        const { subject = "Password Issues", description = "Password Issues Description" } = data;

        const requestPayload = {
            request: {
                subject,
                description,
                requester: { email_id: "swathi.manikandan@indegene.com" },
                // category: { name: "Software" },
                // subcategory: { name: "Adobe Reader" },
                // priority: { name: "High" },
                // status: { name: "Open" },
                // add more fields as per your requirements...
            },
        };

        const body = qs.stringify({
            input_data: JSON.stringify(requestPayload),
        });

        const createTicket = await manageEngineHttpRequest(
            `${ZohoManageEngineUrl}/app/itdesk/api/v3/requests`,
            "POST",
            body
        )

        console.log("createTicketDataa", createTicket.data)

        return "form submittted successfully.";
    } catch (error) {
        console.error("Error in desktopSupportPasswordIssueRequest: ", error);
        throw error;
    }
}

module.exports = {
    desktopSupportPasswordIssueRequest
}