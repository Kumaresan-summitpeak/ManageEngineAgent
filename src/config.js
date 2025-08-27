require("dotenv").config({ path: "./env/.env" })
require("dotenv").config({ path: "./env/.env.local" })
require("dotenv").config()

const config = {
  MicrosoftAppId: process.env.BOT_ID,
  MicrosoftAppType: process.env.BOT_TYPE,
  MicrosoftAppTenantId: process.env.BOT_TENANT_ID,
  MicrosoftAppPassword: process.env.BOT_PASSWORD,
  azureOpenAIKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIEndpoint: process.env.AZURE_OPENAI_ENDPOINT,
  azureOpenAIDeploymentName: process.env.AZURE_OPENAI_DEPLOYMENT_NAME,
  ZohoBaseUrl: process.env.ZOHO_BASE_URL,
  ZohoClientId: process.env.ZOHO_CLIENT_ID,
  ZohoClientSecret: process.env.ZOHO_CLIENT_SECRET,
  ZohoRedirectUrl: process.env.ZOHO_REDIRECT_URL,
  ZohoOauthScope: process.env.ZOHO_OAUTH_SCOPE,
  MongoDbUri: process.env.MONGODB_URI
};

module.exports = config;
