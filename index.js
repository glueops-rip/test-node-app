const express = require("express");

const app = express();
const API_CLIENT_ID = process.env.API_CLIENT_ID || "default-api-client-id";
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET || "default-api-client-secret";
const HUBSPOT_SYNC_ENABLED = process.env.HUBSPOT_SYNC_ENABLED || "default-hubspot-sync-enabled";
const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || "default-hubspot-api-key"




app.get("/", (req, res) => {
  res.send(
    "<h1>GlueOps init</h1>" +
      "<h2> API Credentials </h2>" +
	"API Client ID: <b>" + API_CLIENT_ID + "</b><br />" +
	"API Client Secret: <b>" + API_CLIENT_SECRET + "</b>" +
      "<h2> Hubspot Credentials </h2>" +
	"Hubspot Sync Enabled: <b>" + HUBSPOT_SYNC_ENABLED + "</b><br />" +
	"Hubspot Api Key: <b>" + HUBSPOT_API_KEY + "</b>"
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

