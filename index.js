const express = require("express");

const app = express();
const username = process.env.USERNAME || "example-username";
const password = process.env.PASSWORD || "example-password";
const connectionString = process.env.CONNECTION_STRING;




app.get("/", (req, res) => {
  res.send("<h1>GlueOps init!</h1><h2><br /> Username: " + username + "<br /> Password: " + password + "<br /> Connection String: " + connectionString + "</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

