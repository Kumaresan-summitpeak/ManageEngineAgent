const { TurnContext } = require("botbuilder");
const env = require("../config");

/**
 * @param {*} context This is the context of the teams user request.
 */
const manageEngineSSOAdaptiveCard = async (context) => {
    try {

        const { ZohoBaseUrl, ZohoClientId, ZohoRedirectUrl, ZohoOauthScope } = env;
        const userId = context.activity.from.id;
        const conversationReference = TurnContext.getConversationReference(context.activity);
        const nonce = Math.random().toString(36).substring(2);
        const authState = Buffer.from(JSON.stringify({ userId, nonce, conversationReference }))
        const card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "Welcome to Manage Engine",
                    "weight": "Bolder",
                    "size": "Large",
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "TextBlock",
                    "text": "Sign in to access your projects, tools, and resources.",
                    "wrap": true,
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "Image",
                    "url": "https://res.cloudinary.com/drbwap9x5/image/upload/v1756280539/manageengine-logo-black_bniq9j.png",
                    "size": "Stretch",
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "TextBlock",
                    "text": "Get started by signing in with your Zoho account. Gain access to Request, Problems, and More!",
                    "wrap": true,
                    "horizontalAlignment": "Center"
                },
            ],
            actions: [
                {
                    type: "Action.OpenUrl",
                    title: "Signin",
                    url: `${ZohoBaseUrl}/oauth/v2/auth?response_type=code&client_id=${ZohoClientId}&scope=${ZohoOauthScope}&redirect_uri=${ZohoRedirectUrl}&access_type=offline&state=${authState}`,
                    style: "positive"
                },
                {
                    type: "Action.OpenUrl",
                    title: "Learn More",
                    url: "https://www.zoho.com/accounts/protocol/oauth.html",
                    style: "default"
                }
            ]

        }

        return card;

    } catch (error) {
        console.error("Error in manageEngineSSOAdaptiveCard:", error);
        throw error;
    }
}

module.exports = {
    manageEngineSSOAdaptiveCard
}