/**
 * @param {*} context This is the context of the teams user request.
 * 
 */

const serviceRequestAdaptiveCard = () => {
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
                    "text": "Submit a Ticket Request",
                    "horizontalAlignment": "center",
                    "wrap": true,
                    "style": "heading"
                },
                {
                    "type": "TextBlock",
                    "text": "Please fill out the form below to submit your request.",
                    "wrap": true,
                    "horizontalAlignment": "center",
                    "spacing": "Small"
                },
                {
                    "type": "Input.Text",
                    "label": "Full Name",
                    "style": "text",
                    "id": "requesterName",
                    "isRequired": true,
                    "errorMessage": "Name is required",
                    "placeholder": "Enter your full name",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Text",
                    "label": "Email Address",
                    "style": "email",
                    "id": "requesterEmail",
                    "isRequired": true,
                    "errorMessage": "Email is required and must be valid",
                    "placeholder": "Enter your email address",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Text",
                    "label": "Subject",
                    "style": "text",
                    "id": "subject",
                    "isRequired": true,
                    "errorMessage": "Subject is required",
                    "placeholder": "Enter the ticket subject",
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
                    "placeholder": "Provide a detailed description of your issue or request",
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
                    "title": "Submit Request",
                    "data": {
                        "verb": "Submit Request"
                    },
                    "style": "positive"
                }
            ]
        }

        return card;
    } catch (error) {
        console.error("Error in creating servicerequest adaptive card:", error);
        throw error;
    }
}

module.exports = {
    serviceRequestAdaptiveCard
}