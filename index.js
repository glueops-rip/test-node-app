const express = require("express");

const app = express();
const username = process.env.USERNAME || "default-username";
const password = process.env.PASSWORD || "default-password";
const connectionString = process.env.CONNECTION_STRING || "default-connection-string";
const SHARED_SECRET = process.env.SHARED_SECRET || "default-shared-secret";
const API_CLIENT_ID = process.env.API_CLIENT_ID || "default-api-client-id";
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET || "default-api-client-secret";




app.get("/", (req, res) => {
  res.send("<h1>GlueOps init!</h1><h2><br /> Username: " + username + "<br /> Password: " + password + "<br /> Connection String: " + connectionString + "<br />  Shared Secret: " + SHARED_SECRET + "<br />  API Client ID: " + API_CLIENT_ID + "<br />  API Client Secret: " + API_CLIENT_SECRET + "</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

