const { manageEngineHttpRequest } = require("../../axios/httpRequest");
const env = require("../../config")
const qs = require("qs");

/**
 * 
 * @param {*} context 
 * @param {*} state 
 * @param {*} parameters get the description
 * @returns 
 */
const awsWorkSpaceProvisionTicket = async (context, state, parameters) => {
    try {

        const { ZohoManageEngineUrl } = env;
       
        console.log("awsWorkSpaceProvisionTicket:", JSON.stringify(parameters))

        let formattedDescription = "";
        for (key in parameters) {
            let value = parameters[key];
            formattedDescription += `${key}:${value}\n`;
        }

        const requestPayload = {
            request: {
                subject: "AWS workSpace provision",
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

        console.log("createTicketAwspro:".JSON.stringify(createTicket.data))


        return "Aws workspace provision ticket has been created successfully.";

    } catch (error) {
        console.error("Error in aws workspace provision ticket.", error)
        throw error;
    }
}


module.exports = {
    awsWorkSpaceProvisionTicket
}