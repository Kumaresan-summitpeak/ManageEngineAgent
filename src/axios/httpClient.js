const axios = require("axios");
const { getUser, storeUser } = require("../services/store");
const { ZohoClientId, ZohoClientSecret, ZohoRedirectUrl } = require("../config");


/**
 * @description It will accepts the refreshtoken and return new accessToken
 * @param {*} params Which contains the url,type,teamsChatId and refreshToken
 * @returns accessToken
 */
async function refreshAndGetAccessToken(params) {
    try {
        const { teamsChatId, type, url, refreshToken } = params;

        // Build form body
        let result
        switch (type) {
            case "manageEngine":
                result = {
                    grant_type: "refresh_token",
                    client_id: ZohoClientId,
                    client_secret: ZohoClientSecret,
                    refresh_token: refreshToken,
                    redirect_uri: ZohoRedirectUrl
                }
                break;
            default:
                throw new Error(`Unsupported ${type}`);
        }

        const body = new URLSearchParams(result);

        // Send POST with body
        const { data } = await axios.post(
            url,
            body.toString(),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        // This function will create the user or else update
        await storeUser({
            teamsChatId,
            type,
            accessToken: data.access_token,
            refreshToken: data.refresh_token
        }
        );

        return data.access_token;
    } catch (error) {
        console.error("❌ Failed to refresh token:", error.response?.data || error.message);
        throw error;
    }
}

/**
 * @description It will create the HTTP Client and If unauthorized access which means [404] It will fetch the user refreshToken and reconfigure the HTTP client {Object}
 * @param {*} teamsChatId 
 * @param {*} type 
 * @returns client object
 */
function createClient(teamsChatId, type) {
    const client = axios.create();

    // Attach interceptor
    client.interceptors.response.use(
        (response) => response,
        async (error) => {
            console.error("🔄 Intercepted error response:", error.response);
            if (error.response?.status === 401) {
                console.warn("Unauthorized access");
                const { status = false, user } = await getUser(teamsChatId, type);
                if (!status) {
                    return Promise.reject("User not found.");
                }

                const newAccessToken = await refreshAndGetAccessToken({
                    teamsChatId, type, url: user.loginUrl, refreshToken: user.refreshToken
                });

                // Retry original request with new access token
                if (type == "manageEngine") {
                    error.config.headers["Authorization"] = `Zoho-oauthtoken ${newAccessToken}`;
                } else {
                    error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
                }

                return client.request(error.config);
            }
            return Promise.reject(error);
        }
    );

    return client;
}



module.exports = { createClient };
