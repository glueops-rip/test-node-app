const express = require("express");

const app = express();
const username = process.env.USERNAME || "default-username";
const password = process.env.PASSWORD || "default-password";
const connectionString = process.env.CONNECTION_STRING || "default-connection-string";
const SHARED_SECRET = process.env.SHARED_SECRET || "default-shared-secret";




app.get("/", (req, res) => {
  res.send("<h1>GlueOps init!</h1><h2><br /> Username: " + username + "<br /> Password: " + password + "<br /> Connection String: " + connectionString + "<br />  Shared Secret: " + SHARED_SECRET  + "</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

