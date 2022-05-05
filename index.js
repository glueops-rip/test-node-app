const express = require("express");

const app = express();
const username = process.env.USERNAME || "default-username";
const password = process.env.PASSWORD || "default-password";
const connectionString = process.env.CONNECTION_STRING || "default-connection-string";
const API_CLIENT_ID = process.env.API_CLIENT_ID || "default-api-client-id";
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET || "default-api-client-secret";




app.get("/", (req, res) => {
  res.send(
    "<h1>GlueOps init</h1>" +
      "<h2> API Credentials </h2>" +
	"API Client ID: <b>" + API_CLIENT_ID + "</b><br />" +
	"API Client Secret: <b>" + API_CLIENT_SECRET + "</b>" +
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

