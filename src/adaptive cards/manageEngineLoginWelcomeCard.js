
const manageEngineLoginWelcomeCard = (firstName = "", lastName = "") => {
    try {

        const welcomeText = `Dear ${firstName} ${lastName}, welcome aboard!`;
        const card = {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": welcomeText,
                            "weight": "Bolder",
                            "size": "Large",
                            "wrap": true,
                            "horizontalAlignment": "Center"
                        },
                        {
                            "type": "TextBlock",
                            "text": "You're now connected to ManageEngine Helpdesk. Create, track, and resolve your tickets seamlessly right here.",
                            "wrap": true,
                            "spacing": "Medium",
                            "horizontalAlignment": "Center"
                        },
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "✅",
                                    "value": "Open tickets in seconds"
                                },
                                {
                                    "title": "📊",
                                    "value": "Track progress in real time"
                                },
                                {
                                    "title": "🤝",
                                    "value": "Get continuous, seamless support"
                                }
                            ]
                        }
                    ]
                }
            ],
            "version": "1.4"
        }
        return card;
    } catch (error) {
        console.error("Error in manageengine welcome card:", error)
        throw error;
    }
}

module.exports = {
    manageEngineLoginWelcomeCard
}