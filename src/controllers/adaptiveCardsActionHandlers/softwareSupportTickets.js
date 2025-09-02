const { CardFactory } = require("botbuilder")
const { softwareSupportTicketTemplateAdaptiveCard } = require("../../adaptive cards/softwareSupportTemplate")

const softwareSupportTicketActionHandler = async (context, state) => {
    try {

        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(softwareSupportTicketTemplateAdaptiveCard())]
        });
        return "Please fill the software support ticket.";
    } catch (error) {
        console.error("Error in software support ticket action handler.");
        throw error;
    }
}

module.exports = {
    softwareSupportTicketActionHandler
}