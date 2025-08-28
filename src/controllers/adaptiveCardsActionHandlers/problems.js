const { CardFactory } = require("botbuilder")
const { problemsAdaptiveCard } = require("../../adaptive cards/problems");

const problemsActionHandler = async (context, state, data) => {
    try {
        
        await context.sendActivity({
            attachments: [CardFactory.adaptiveCard(problemsAdaptiveCard())]
        });
        return "Please fill the form to report a problem.";
    } catch (error) {
        console.error("Error in Problems action action handler.");
        throw error;
    }
}

module.exports = {
    problemsActionHandler
}