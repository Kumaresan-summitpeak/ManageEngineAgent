const { CardFactory } = require("botbuilder")
const { releaseAdaptiveCard } = require("../../adaptive cards/release");

const releaseActionHandler = async (context, state, data) => {
    try {
        
        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(releaseAdaptiveCard())]
        });
        return "Please fill the form to submit a release request.";
    } catch (error) {
        console.error("Error in  release action handler.");
        throw error;
    }
}

module.exports = {
    releaseActionHandler
}