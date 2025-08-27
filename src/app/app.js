const { MemoryStorage, MessageFactory } = require("botbuilder");
const path = require("path");
const config = require("../config");
const { ActivityTypes, CardFactory } = require("botbuilder")
const { manageEngineSSOAdaptiveCard } = require("../adaptive cards/manageEngine");
const { userAuthentication } = require("../middlewares/user");

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



app.ai.action("createTicket", async (context, state) => {


  return `Task has been created`;
});
// Listen for user to say '/reset' and then delete conversation state
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
