const { manageEngineHttpRequest } = require("../../axios/httpRequest");
const env = require("../../config")
const qs = require("qs");

const awsSupportTicket = async (context, state, parameters) => {
    try {

        const { ZohoManageEngineUrl } = env;
        const { description } = parameters

        console.log("awsSupportTicketParameters:", JSON.stringify(parameters))


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

        console.log("createTicketAwsSupport:", JSON.stringify(createTicket.data))

        return "Aws support ticket has been created successfully.";

    } catch (error) {
        console.error("Error in Aws support ticket.", error)
        throw error;
    }
}


module.exports = {
    awsSupportTicket
}