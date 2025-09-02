/**
 * @param {*} context This is the context of the teams user request.
 */

const desktopSupportPasswordIssueTemplateAdaptiveCard = () => {
    try {

        const card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.6",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "Add Request",
                    "size": "large",
                    "wrap": true,
                    "weight": "bolder",
                    "style": "heading"
                },
                {
                    "type": "FactSet",
                    "spacing": "Medium",
                    "facts": [
                        { "title": "Requester:", "value": "Swathi Manikandan" },
                        { "title": "Email:", "value": "swathi.manikandan@indegene.com" },
                        { "title": "Template:", "value": "Password Issues" }
                    ]
                },
                {
                    "type": "Input.Text",
                    "label": "On behalf of (email) — optional",
                    "id": "onBehalfOfEmail",
                    "placeholder": "user@company.com",
                    "style": "email"
                },
                {
                    "type": "Input.Text",
                    "id": "subject",
                    "label": "Subject",
                    "value": "Password Issues",
                    "isRequired": true,
                    "errorMessage": "Subject is required."
                },
                {
                    "type": "Input.Text",
                    "id": "description",
                    "label": "Description",
                    "isMultiline": true,
                    "isRequired": true,
                    "errorMessage": "Description is required."
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Add request",
                    "data": { "verb": "CreatePasswordIssueTicket" }
                },
                { "type": "Action.Submit", "title": "Reset", "data": { "verb": "ResetPasswordIssueForm" } },
                { "type": "Action.Submit", "title": "Cancel", "data": { "verb": "CancelPasswordIssueForm" } }
            ]
        }


        return card;

    } catch (error) {
        console.error("Error in creating desktopSupportPasswordIssueTemplateAdaptiveCard:", error);
        throw error;
    }
}

module.exports = { desktopSupportPasswordIssueTemplateAdaptiveCard }