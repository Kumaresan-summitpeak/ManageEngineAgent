// Import required packages
const express = require("express");
const axios = require("axios");

// This agent's adapter
const adapter = require("./adapter");

// This agent's main dialog.
const app = require("./app/app");
const MongoDbConnection = require("./configs/mongoose");
const env = require("./config");
const { storeUser } = require("./services/store");
const { jwtDecode } = require("./utils/jwt");
const { storeManageEngineCredientials } = require("./controllers/manageEngineCredientials/storeManageEngineCredientials");

// Create express application.
const expressApp = express();
expressApp.use(express.json());

// Initilize mongoDb connection
new MongoDbConnection();

const server = expressApp.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`\nAgent started, ${expressApp.name} listening to`, server.address());
});

// Listen for incoming requests.
expressApp.post("/api/messages", async (req, res) => {
  // Route received a request to adapter for processing
  await adapter.process(req, res, async (context) => {
    // Dispatch to application for routing
    await app.run(context);
  });
});


expressApp.post("/api/manageEngine", storeManageEngineCredientials);

/**
 * @ callback function for manageEngine accesstoken.
 */
expressApp.get("/manageEngine/callback", async (req, res) => {
  try {

    const { ZohoClientId, ZohoClientSecret, ZohoRedirectUrl, ZohoBaseUrl } = env
    const { code, state } = req.query;
    const decodeState = JSON.parse(Buffer.from(state, "base64url").toString());
    const userId = decodeState.userId

    // Build form body
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      client_id: ZohoClientId,
      client_secret: ZohoClientSecret,
      redirect_uri: ZohoRedirectUrl,
      code,
    });

    // Send POST with body
    const { data } = await axios.post(
      `${ZohoBaseUrl}/oauth/v2/token`,
      body.toString(),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const decodeToken = await jwtDecode(data.id_token)
    // Store the user token
    await storeUser({
      teamsChatId: userId,
      type: "manageEngine",
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      loginUrl: `${ZohoBaseUrl}/oauth/v2/token`,
      firstName: decodeToken.first_name,
      lastName: decodeToken.last_name,
      name: decodeToken.name,
      email: decodeToken?.email,
      sub: decodeToken.sub,
      aud: decodeToken.aud,
      emailVerified: decodeToken.email_verified
    }
    );

    res.send(`<html><body><h2>✅ Connected to ManageEngine. You can close this tab.</h2></body></html>`);
  } catch (error) {
    console.error("Error in manageengine callback:", error)
    return res.status(500).json({ status: false, statusCode: 500, message: error.message })
  }
})
