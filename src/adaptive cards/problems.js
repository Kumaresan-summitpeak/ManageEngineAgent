/**
 * @description This is an problems adaptive card.
 */

const problemsAdaptiveCard = () => {
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
                    "text": "Report a Problem",
                    "horizontalAlignment": "center",
                    "wrap": true,
                    "style": "heading"
                },
                {
                    "type": "TextBlock",
                    "text": "Please provide the details below to help us investigate the issue.",
                    "wrap": true,
                    "horizontalAlignment": "center",
                    "spacing": "Small"
                },
                {
                    "type": "Input.Text",
                    "label": "Problem Title",
                    "style": "text",
                    "id": "problemTitle",
                    "isRequired": true,
                    "errorMessage": "Problem title is required",
                    "placeholder": "Enter a brief title for the problem",
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
                    "placeholder": "Provide a detailed description of the problem",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.ChoiceSet",
                    "label": "Category",
                    "id": "category",
                    "isRequired": true,
                    "errorMessage": "Please select a category",
                    "choices": [
                        {
                            "title": "Software",
                            "value": "Software"
                        },
                        {
                            "title": "Hardware",
                            "value": "Hardware"
                        },
                        {
                            "title": "Network",
                            "value": "Network"
                        },
                        {
                            "title": "Account Management",
                            "value": "Account Management"
                        }
                    ],
                    "spacing": "Medium"
                },
                {
                    "type": "Input.ChoiceSet",
                    "label": "Priority",
                    "id": "priority",
                    "isRequired": true,
                    "errorMessage": "Please select a priority",
                    "choices": [
                        {
                            "title": "Low",
                            "value": "Low"
                        },
                        {
                            "title": "Medium",
                            "value": "Medium"
                        },
                        {
                            "title": "High",
                            "value": "High"
                        }
                    ],
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Date",
                    "label": "Due Date",
                    "id": "dueDate",
                    "isRequired": true,
                    "errorMessage": "Due date is required",
                    "spacing": "Medium"
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Submit Problem",
                    "data": {
                        "verb": "Submit Problem"
                    },
                    "style": "positive"
                }
            ]
        }
        return card;
    } catch (error) {
        console.error("Error in problems adaptive card:", error)
        throw error;
    }
}

module.exports = {
    problemsAdaptiveCard
}