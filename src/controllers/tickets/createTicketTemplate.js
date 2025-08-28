const { CardFactory } = require("botbuilder")
const { ticketTemplateAdaptiveCard } = require("../../adaptive cards/ticketTemplate");

const ticketTemplate = async (context, state) => {
    try {

        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(await ticketTemplateAdaptiveCard(context))]
        });

        return "Please choose the available tickets in the template list to rise the ticket.";

    } catch (error) {
        console.error("Error in creating ticket template:", error);
        throw error;
    }
}
module.exports = { ticketTemplate };