const { MemoryStorage, MessageFactory } = require("botbuilder");
const path = require("path");
const config = require("../config");
const { ActivityTypes, CardFactory } = require("botbuilder")
const { manageEngineSSOAdaptiveCard } = require("../adaptive cards/manageEngine");
const { userAuthentication } = require("../middlewares/user");
const { ticketTemplate } = require("../controllers/tickets/createTicketTemplate");


// Handler imports
const { desktopSupportTicketActionHandler } = require("../controllers/adaptiveCardsActionHandlers/desktopSupportTickets");
const { softwareSupportTicketActionHandler } = require("../controllers/adaptiveCardsActionHandlers/softwareSupportTickets");

// See https://aka.ms/teams-ai-library to learn more about the Teams AI library.
const { Application, ActionPlanner, OpenAIModel, PromptManager } = require("@microsoft/teams-ai");

// Create AI components
const model = new OpenAIModel({
  azureApiKey: config.azureOpenAIKey,
  azureDefaultDeployment: config.azureOpenAIDeploymentName,
  azureEndpoint: config.azureOpenAIEndpoint,

  useSystemMessages: true,
  logRequests: true,
});
const prompts = new PromptManager({
  promptsFolder: path.join(__dirname, "../prompts"),
});
const planner = new ActionPlanner({
  model,
  prompts,
  defaultPrompt: "chat",
  // defaultPrompt: 'sequence'
});

// Define storage and application
const storage = new MemoryStorage();
const app = new Application({
  storage,
  ai: {
    planner,
  },
});


// Handle the action here.
app.ai.action("createTicket", ticketTemplate);
app.ai.action("deskTopSupport", desktopSupportTicketActionHandler);
app.ai.action("softwareSupport", softwareSupportTicketActionHandler);

// Adaptive cards
app.adaptiveCards.actionSubmit('DesktopSupport', desktopSupportTicketActionHandler);
app.adaptiveCards.actionSubmit('SoftwareSupport', softwareSupportTicketActionHandler);



// Listen for user to say '/login' and then delete conversation state
app.message('/login', async (context, state) => {

  await context.sendActivity({
    attachments: [CardFactory.adaptiveCard(await manageEngineSSOAdaptiveCard(context))]
  });

  return;
});


// Listen for ANY message to be received. MUST BE AFTER ANY OTHER MESSAGE HANDLERS
app.activity(ActivityTypes.Message, async (context, state) => {

  const teamsChatId = context.activity.from.id

  const { isAuthenticated, message } = await userAuthentication(teamsChatId, "manageEngine");

  // If the user is not authenticated with manage engine then send login card to loin first manage engine.
  if (!isAuthenticated) {
    await context.sendActivity({
      attachments: [CardFactory.adaptiveCard(await manageEngineSSOAdaptiveCard(context))]
    });
    return;
  }

  await app.ai.run(context, state);

});

module.exports = app;
