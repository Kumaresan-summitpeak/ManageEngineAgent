/**
 * @param {*} context This is the context of the teams user request.
 */

const ticketTemplateAdaptiveCard = async () => {
    try {

        const card = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.5",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "📌 Issues Catalog",
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
                        "data": { "verb": "DesktopSupport" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f4bb.png",
                                            "size": "Small",
                                            "altText": "Desktop"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Desktop Support",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "For issues related to your desktop computer",
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
                        "data": { "verb": "SoftwareSupport" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f4be.png",
                                            "size": "Small",
                                            "altText": "Software"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Software Support",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "For issues with software applications",
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
                        "data": { "verb": "ServerSupport" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f5a5.png",
                                            "size": "Small",
                                            "altText": "Server"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Server Support",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "For issues with server-related services",
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
                        "data": { "verb": "NetworkSupport" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f578.png",
                                            "size": "Small",
                                            "altText": "Network"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Network Support",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "For issues with network connectivity",
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
                        "data": { "verb": "AwsSupport" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/2601.png",
                                            "size": "Small",
                                            "altText": "Cloud"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "AWS Support",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "For issues with AWS services",
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
                        "data": { "verb": "SvnSupport" }
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
                                            "url": "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f4c1.png",
                                            "size": "Small",
                                            "altText": "Folder"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "SVN Support",
                                            "weight": "Bolder",
                                            "wrap": true
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "For issues with SVN repository access or usage",
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
                        "data": { "verb": "OthersHardwareSupport" }
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
                        "data": { "verb": "PasswordIssues" }
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
                        "data": { "verb": "DesktopLaptopPrintersSupport" }
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

module.exports = { ticketTemplateAdaptiveCard }