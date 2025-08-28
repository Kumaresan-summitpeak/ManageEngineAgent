const { CardFactory } = require("botbuilder")
const { serviceRequestAdaptiveCard } = require("../../adaptive cards/serviceRequest")

const serviceRequestsActionHandler = async (context, state, data) => {
    try {
        
        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(serviceRequestAdaptiveCard())]
        });
        return "Please fill the Request ticket.";
    } catch (error) {
        console.error("Error in service request action handler.");
        throw error;
    }
}

module.exports = {
    serviceRequestsActionHandler
}