const { CardFactory } = require("botbuilder")
const { desktopSupportPasswordIssueTemplateAdaptiveCard } = require("../../adaptive cards/desktopSupportPasswordIssueTemplate")

const desktopSupportasswordIssueTicketForm = async (context, state) => {
    try {

        console.log("Desktop support password issue called.")
        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(desktopSupportPasswordIssueTemplateAdaptiveCard())]
        });
        return "Please fill the desktop support password issue ticket.";
    } catch (error) {
        console.error("Error in desktop support password issue action handler.");
        throw error;
    }
}

module.exports = {
    desktopSupportasswordIssueTicketForm

}