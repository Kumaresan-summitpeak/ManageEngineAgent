/**
 * @param {*} context This is the context of the teams user request.
 */

const softwareSupportTicketTemplateAdaptiveCard = () => {
    try {
        const card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.5",
            "body": [
                {
                    "type": "Image",
                    "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f4bb.png", // 💻 header icon
                    "size": "Small",
                    "horizontalAlignment": "Center",
                    "altText": "Software Icon"
                },
                {
                    "type": "TextBlock",
                    "text": "Software Support Issues Catalog",
                    "weight": "Bolder",
                    "size": "Large",
                    "horizontalAlignment": "Center",
                    "wrap": true
                },
                {
                    "type": "TextBlock",
                    "text": "Select an issue type below to raise a ticket",
                    "wrap": true,
                    "horizontalAlignment": "Center",
                    "size": "Medium",
                    "spacing": "Small"
                },

                /* Others (Software) */
                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "SoftwareSupportOthersSoftwareTicket" }
                    },
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f3ab.png", // 🎫
                                            "size": "Small",
                                            "altText": "Ticket"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        { "type": "TextBlock", "text": "Others (Software)", "weight": "Bolder", "wrap": true },
                                        { "type": "TextBlock", "text": "Others (Software)", "isSubtle": true, "wrap": true, "spacing": "None" }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* Local Admin Rights */
                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "SoftwareSupportLocalAdminRightsTicket" }
                    },
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f511.png", // 🔑
                                            "size": "Small",
                                            "altText": "Admin Rights"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        { "type": "TextBlock", "text": "Local Admin Rights", "weight": "Bolder", "wrap": true },
                                        { "type": "TextBlock", "text": "Not Working", "isSubtle": true, "wrap": true, "spacing": "None" }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* MS Teams */
                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "SoftwareSupportMSTeamsTicket" }
                    },
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f5e3.png", // 🗣️ (speaking head)
                                            "size": "Small",
                                            "altText": "MS Teams"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        { "type": "TextBlock", "text": "MS Teams", "weight": "Bolder", "wrap": true },
                                        { "type": "TextBlock", "text": "Issues related to MS Teams app", "isSubtle": true, "wrap": true, "spacing": "None" }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* Outlook */
                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "SoftwareSupportOutlookTicket" }
                    },
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f4e7.png", // 📧
                                            "size": "Small",
                                            "altText": "Outlook"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        { "type": "TextBlock", "text": "Outlook", "weight": "Bolder", "wrap": true },
                                        { "type": "TextBlock", "text": "Issues related to Outlook app", "isSubtle": true, "wrap": true, "spacing": "None" }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                /* Application/Software */
                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "SoftwareSupportApplicationSoftwareTicket" }
                    },
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f4be.png", // 💾
                                            "size": "Small",
                                            "altText": "Application/Software"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        { "type": "TextBlock", "text": "Application/Software", "weight": "Bolder", "wrap": true },
                                        { "type": "TextBlock", "text": "Not working", "isSubtle": true, "wrap": true, "spacing": "None" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }

        return card;
    } catch (error) {
        console.error("Error in creating software ticket template adaptive card:", error);
        throw error;
    }
};

module.exports = { softwareSupportTicketTemplateAdaptiveCard };
