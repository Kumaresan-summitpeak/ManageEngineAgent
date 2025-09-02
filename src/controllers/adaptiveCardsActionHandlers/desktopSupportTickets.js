const { CardFactory } = require("botbuilder")
const { desktopSupportTicketTemplateAdaptiveCard } = require("../../adaptive cards/desktopSupportTemplates")

const desktopSupportTicketActionHandler = async (context, state) => {
    try {

        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(desktopSupportTicketTemplateAdaptiveCard())]
        });
        return "Please fill the desktop support ticket.";
    } catch (error) {
        console.error("Error in desktop support ticket action handler.");
        throw error;
    }
}

module.exports = {
    desktopSupportTicketActionHandler
}