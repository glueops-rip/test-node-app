const express = require("express");

const app = express();
const DB_USER = process.env.DB_USER || "missing-parameter";
const DB_NAME = process.env.DB_NAME || "missing-parameter";
const DB_PASS = process.env.DB_PASS || "missing-parameter";
const INSTANCE_CONNECTION_NAME = process.env.INSTANCE_CONNECTION_NAME | "missing-parameter"


const { Client } = require('pg')

const client = new Client({
  user: DB_USER,
  host: INSTANCE_CONNECTION_NAME,
  database: DB_NAME,
  password: DB_PASS,
  port: 3211,
})

client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})

app.get("/", (req, res) => {
  res.send(
    "<h1>GlueOps May 21, 2022</h1>" +
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

