

const releaseAdaptiveCard = () => {
    try {
        const card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.6",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "large",
                    "weight": "bolder",
                    "text": "Submit a Release Request",
                    "horizontalAlignment": "center",
                    "wrap": true,
                    "style": "heading"
                },
                {
                    "type": "TextBlock",
                    "text": "Please provide the details below to initiate a release.",
                    "wrap": true,
                    "horizontalAlignment": "center",
                    "spacing": "Small"
                },
                {
                    "type": "Input.Text",
                    "label": "Release Title",
                    "style": "text",
                    "id": "releaseTitle",
                    "isRequired": true,
                    "errorMessage": "Release title is required",
                    "placeholder": "Enter a brief title for the release",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Text",
                    "label": "Description",
                    "style": "text",
                    "isMultiline": true,
                    "id": "description",
                    "isRequired": true,
                    "errorMessage": "Description is required",
                    "placeholder": "Provide a detailed description of the release",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.ChoiceSet",
                    "label": "Release Template",
                    "id": "template",
                    "isRequired": true,
                    "errorMessage": "Please select a release template",
                    "choices": [
                        {
                            "title": "Database Upgrade",
                            "value": "Database Upgrade"
                        },
                        {
                            "title": "Firewall Configuration",
                            "value": "Firewall Configuration"
                        },
                        {
                            "title": "Software Deployment",
                            "value": "Software Deployment"
                        }
                    ],
                    "spacing": "Medium"
                },
                {
                    "type": "Input.ChoiceSet",
                    "label": "Release Stage",
                    "id": "stage",
                    "isRequired": true,
                    "errorMessage": "Please select a release stage",
                    "choices": [
                        {
                            "title": "Planning",
                            "value": "Planning"
                        },
                        {
                            "title": "Development",
                            "value": "Development"
                        },
                        {
                            "title": "Testing",
                            "value": "Testing"
                        },
                        {
                            "title": "Deployment",
                            "value": "Deployment"
                        }
                    ],
                    "spacing": "Medium"
                },
                {
                    "type": "Input.ChoiceSet",
                    "label": "Release Status",
                    "id": "status",
                    "isRequired": true,
                    "errorMessage": "Please select a release status",
                    "choices": [
                        {
                            "title": "Draft",
                            "value": "Draft"
                        },
                        {
                            "title": "In Progress",
                            "value": "In Progress"
                        },
                        {
                            "title": "Completed",
                            "value": "Completed"
                        }
                    ],
                    "spacing": "Medium"
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Submit Release Request",
                    "data": {
                        "action": "submitRelease"
                    },
                    "style": "positive"
                }
            ]
        }
        return card;
    } catch (error) {
        console.error("Error in release adaptive card:", error);
        throw error;
    }
}

module.exports = {
    releaseAdaptiveCard
}