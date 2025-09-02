
const { getUser, getManageEngineCredientials } = require("../services/store");
const { createClient, manageEngineClient } = require("./httpClient");
const env = require("../config");


/**
 * @description It will accepts the parameters and make HTTP requests and return the response.
 * @param {*} client 
 * @param {*} method 
 * @param {*} url 
 * @param {*} data 
 * @param {*} config 
 * @returns response {Object}
 */
async function httpResponse(client, method = "GET", url, data, config) {
    try {
        let response;

        switch (method.toUpperCase()) {
            case "GET":
                response = await client.get(url, config);
                break;

            case "POST":
                response = await client.post(url, data, config);
                break;

            case "PUT":
                response = await client.put(url, data, config);
                break;

            case "PATCH":
                response = await client.patch(url, data, config);
                break;

            case "DELETE":
                response = await client.delete(url, config);
                break;

            default:
                throw new Error(`Unsupported HTTP method: ${method}`);
        }

        return response;
    } catch (error) {
        console.error(`Error making ${method} request:`, error);
        throw error;
    }
}

/**
 * @description It will create the HTTP Client and return the response.
 * @param {*} teamsChatId 
 * @param {*} type 
 * @param {*} url 
 * @param {*} method 
 * @param {*} data 
 * @returns response {Object}
 */
async function httpRequest(teamsChatId, type, url, method = "GET", data = null) {
    try {

        // Get the user accessToken and refreshToken
        const { status, user } = await getUser(teamsChatId, type);

        if (!status) {
            throw new Error("User is not authenticated.");
        }

        // It will create the Http client and return
        const client = createClient(teamsChatId, type);

        let token;

        if (type == "manageEngine") {
            token = `Zoho-oauthtoken ${user.accessToken}`
        } else {
            token = `Bearer ${user.accessToken}`
        }

        // Headers Configuration
        const config = {
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            }
        };

        let response;
        response = await httpResponse(client, method, url, data, config)

        return response;
    } catch (error) {
        console.error(`Error making ${method} request:`, error);
        throw error;
    }
}


/**
 * @description It will create the HTTP Client and return the response.
 * @param {*} teamsChatId 
 * @param {*} type 
 * @param {*} url 
 * @param {*} method 
 * @param {*} data 
 * @returns response {Object}
 */
//  const { ZohoManageEngineAccessToken } = env
// console.log("ZohoManageEngineAccessToken:",ZohoManageEngineAccessToken)
async function manageEngineHttpRequest(url, method = "GET", data = null) {
    try {

        const { ZohoManageEngineAccessToken } = env
        // It will create the Http client and return
        const client = manageEngineClient();

        const credientials = await getManageEngineCredientials()

        let token = `Zoho-oauthtoken ${credientials.accessToken}`

        console.log("tokentokentoken:", token)

        // Headers Configuration
        const config = {
            headers: {
                "Authorization": token,
                "Accept": "application/vnd.manageengine.sdp.v3+json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        let response;
        response = await httpResponse(client, method, url, data, config)

        return response;
    } catch (error) {
        console.error(`Error making ${method} request:`, error);
        throw error;
    }
}

module.exports = { httpRequest, manageEngineHttpRequest };
