const express = require("express");

const app = express();
const username = process.env.USERNAME || "default-username";
const password = process.env.PASSWORD || "default-password";
const connectionString = process.env.CONNECTION_STRING || "default-connection-string";
const SHARED_SECRET = process.env.SHARED_SECRET || "default-shared-secret";
const API_CLIENT_ID = process.env.API_CLIENT_ID || "default-api-client-id";
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET || "default-api-client-secret";
const AIRBNB_APP_NAME = process.env.AIRBNB_APP_NAME || "default-airbnb-app-name";
const AIRBNB_CLIENT_ID = process.env.AIRBNB_CLIENT_ID || "default-airbnb-client-id";
const AIRBNB_CLIENT_SECRET = process.env.AIRBNB_CLIENT_SECRET || "default-airnbn-client-secret";




app.get("/", (req, res) => {
  res.send(
    "<h1>GlueOps init</h1>" +
      "<h2> User Credentials</h2>" +
	"<p>Username: <b>" + username + "</b><br />" +
	"Password: <b>" + password + "</b>" +
      "<h2> DB Credentials </h2>" +
	"Connection String: <b>" + connectionString + "</b><br />" +
	"Shared Secret: <b>" + SHARED_SECRET + "</b>" +
      "<h2> API Credentials </h2>" +
	"API Client ID: <b>" + API_CLIENT_ID + "</b><br />" +
	"API Client Secret: <b>" + API_CLIENT_SECRET + "</b>" +
      "<h2> AirBnb Credentials </h2>" +
	"Airbnb App Name: <b>" + AIRBNB_APP_NAME + "</b><br />" +
	"Airbnb Client ID: <b>" + AIRBNB_CLIENT_ID + "</b><br />" +
	"Airbnb Client Secret: <b>" + AIRBNB_CLIENT_SECRET + "</b>"
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

