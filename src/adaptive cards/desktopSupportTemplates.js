/**
 * @param {*} context This is the context of the teams user request.
 */

const desktopSupportTicketTemplateAdaptiveCard = () => {
    try {

        const card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.5",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "🖥️ Desktop Support Issues Catalog",
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

                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "DesktopSupportOthersHardwareTicket" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f3ab.png",
                                            "size": "Small",
                                            "altText": "Ticket"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Others (Hardware)",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Issues related to other hardware",
                                            "isSubtle": true,
                                            "wrap": true,
                                            "spacing": "None"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "DesktopSupportPasswordIssuesTicket" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f511.png",
                                            "size": "Small",
                                            "altText": "Key"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Password Issues",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Outlook / MS Teams / Homepage / Laptop login",
                                            "isSubtle": true,
                                            "wrap": true,
                                            "spacing": "None"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                {
                    "type": "Container",
                    "style": "emphasis",
                    "bleed": true,
                    "spacing": "Medium",
                    "selectAction": {
                        "type": "Action.Submit",
                        "data": { "verb": "DesktopSupportLaptopPrintersTicket" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f5a8.png",
                                            "size": "Small",
                                            "altText": "Printer"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Desktops / Laptops / Printers",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "For all issues related to Desktops / Laptops / Printers",
                                            "isSubtle": true,
                                            "wrap": true,
                                            "spacing": "None"
                                        }
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
        console.error("Error in creating ticket template adaptive card:", error);
        throw error;
    }
}

module.exports = { desktopSupportTicketTemplateAdaptiveCard }