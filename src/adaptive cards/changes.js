

const changesAdaptiveCard = () => {
    try {

        const card = {
            "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.5",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Large",
                    "weight": "Bolder",
                    "text": "Submit a Change Request",
                    "horizontalAlignment": "Center",
                    "wrap": true,
                    "style": "heading"
                },
                {
                    "type": "TextBlock",
                    "text": "Please provide the details below to initiate a change.",
                    "wrap": true,
                    "horizontalAlignment": "Center",
                    "spacing": "Small"
                },
                {
                    "type": "Input.Text",
                    "label": "Change Title",
                    "id": "changeTitle",
                    "isRequired": true,
                    "errorMessage": "Change title is required",
                    "placeholder": "Enter a brief title for the change",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Text",
                    "label": "Description",
                    "isMultiline": true,
                    "id": "description",
                    "isRequired": true,
                    "errorMessage": "Description is required",
                    "placeholder": "Provide a detailed description of the change",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.ChoiceSet",
                    "label": "Change Type",
                    "id": "changeType",
                    "isRequired": true,
                    "errorMessage": "Please select a change type",
                    "choices": [
                        {
                            "title": "Standard",
                            "value": "Standard"
                        },
                        {
                            "title": "Major",
                            "value": "Major"
                        },
                        {
                            "title": "Minor",
                            "value": "Minor"
                        },
                        {
                            "title": "Significant",
                            "value": "Significant"
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
                    "label": "Scheduled Start Time",
                    "id": "scheduledStartTime",
                    "isRequired": true,
                    "errorMessage": "Scheduled start time is required",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Date",
                    "label": "Scheduled End Time",
                    "id": "scheduledEndTime",
                    "isRequired": true,
                    "errorMessage": "Scheduled end time is required",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Text",
                    "label": "Reason for Change",
                    "id": "reasonForChange",
                    "isRequired": true,
                    "errorMessage": "Reason for change is required",
                    "placeholder": "Enter the reason for the change",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Text",
                    "label": "Change Owner",
                    "id": "changeOwner",
                    "isRequired": true,
                    "errorMessage": "Change owner is required",
                    "placeholder": "Enter the name of the change owner",
                    "spacing": "Medium"
                },
                {
                    "type": "Input.Text",
                    "label": "Change Manager",
                    "id": "changeManager",
                    "isRequired": true,
                    "errorMessage": "Change manager is required",
                    "placeholder": "Enter the name of the change manager",
                    "spacing": "Medium"
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Submit Change Request",
                    "data": {
                        "verb": "Submit Change Request"
                    },
                    "style": "positive"
                }
            ]
        }
        return card;
    } catch (error) {
        console.error("Error in creating changes adaptive card:", error);
        throw error;
    }
}

module.exports = {
    changesAdaptiveCard
}