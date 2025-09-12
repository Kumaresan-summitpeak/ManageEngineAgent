const { manageEngineHttpRequest } = require("../../axios/httpRequest");
const env = require("../../config")
const qs = require("qs");

const awsServiceTicket = async (context, state, parameters) => {
    try {

        const { ZohoManageEngineUrl } = env;
      
        console.log("awsServiceTicket:", JSON.stringify(parameters))

        let formattedDescription = "";
        for (key in parameters) {
            let value = parameters[key];
            formattedDescription += `${key}:${value}\n`;
        }

        const requestPayload = {
            request: {
                subject: "Aws service Support",
                description: formattedDescription,
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

        console.log("createTicketAwsService:", JSON.stringify(createTicket.data))


        return "Aws service request ticket has been created successfully.";

    } catch (error) {
        console.error("Error in aws service request ticket.", error)
        throw error;
    }
}


module.exports = {
    awsServiceTicket
}