/**
 * @param {*} context This is the context of the teams user request.
 */

const ticketTemplateAdaptiveCard = async (context) => {
    try {
        const logoUrl = "https://res.cloudinary.com/drbwap9x5/image/upload/v1756280539/manageengine-logo-black_bniq9j.png";

        const card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "Choose a Ticket Type",
                    "weight": "Bolder",
                    "size": "Large",
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "TextBlock",
                    "text": "Pick the type that matches what you need. We’ll show matching templates next.",
                    "wrap": true,
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "Image",
                    "url": logoUrl,
                    "size": "Stretch",
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "TextBlock",
                    "text": "Common types in ManageEngine ServiceDesk Plus:",
                    "wrap": true,
                    "horizontalAlignment": "Center",
                    "weight": "Bolder",
                    "spacing": "Medium"
                },
                {
                    "type": "ColumnSet",
                    "spacing": "Small",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Container",
                                    "style": "emphasis",
                                    "bleed": true,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Service Requests",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "spacing": "None",
                                            "isSubtle": true,
                                            "wrap": true,
                                            "text": "Submit requests for new services, resources, or access—such as software installation, account creation, or hardware provisioning."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "ColumnSet",
                    "spacing": "Small",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Container",
                                    "style": "emphasis",
                                    "bleed": true,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Problems",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "spacing": "None",
                                            "isSubtle": true,
                                            "wrap": true,
                                            "text": "Report underlying issues that may be causing recurring service disruptions, requiring investigation and resolution."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "ColumnSet",
                    "spacing": "Small",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Container",
                                    "style": "emphasis",
                                    "bleed": true,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Changes",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "spacing": "None",
                                            "isSubtle": true,
                                            "wrap": true,
                                            "text": "Submit and manage requests for planned changes to systems, configurations, or infrastructure (e.g., software updates, firewall modifications)."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "ColumnSet",
                    "spacing": "Small",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Container",
                                    "style": "emphasis",
                                    "bleed": true,
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Release",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "spacing": "None",
                                            "isSubtle": true,
                                            "wrap": true,
                                            "text": "Manage and coordinate the deployment of new features, fixes, or updates across systems and environments."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "TextBlock",
                    "text": "Select a type to see available templates.",
                    "wrap": true,
                    "horizontalAlignment": "Center",
                    "spacing": "Medium"
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "ServiceRequests",
                    "style": "positive",
                    "data": { "verb": "selectTicketType", "ticketType": "Service Request" }
                },
                {
                    "type": "Action.Submit",
                    "title": "Problems",
                    "style": "positive",
                    "data": { "verb": "selectTicketType", "ticketType": "Problem" }
                },
                {
                    "type": "Action.Submit",
                    "title": "Changes",
                    "style": "positive",
                    "data": { "verb": "selectTicketType", "ticketType": "Change" }
                },
                {
                    "type": "Action.Submit",
                    "title": "Release",
                    "style": "positive",
                    "data": { "verb": "selectTicketType", "ticketType": "Release" }
                }
            ]
        }

        return card;

    } catch (error) {
        console.error("Error in creating ticket template adaptive card:", error);
        throw error;
    }
}

module.exports = { ticketTemplateAdaptiveCard }