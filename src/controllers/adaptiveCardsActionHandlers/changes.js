const { CardFactory } = require("botbuilder")
const { changesAdaptiveCard } = require("../../adaptive cards/changes");

const changesActionHandler = async (context, state, data) => {
    try {
        
        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(changesAdaptiveCard())]
        });
        return "Please fill the form to submit the change request.";
    } catch (error) {
        console.error("Error in  changes action handler.");
        throw error;
    }
}

module.exports = {
    changesActionHandler
}