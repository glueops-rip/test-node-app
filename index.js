const express = require("express");

const app = express();
const username = process.env.USERNAME || "example-username";
const password = process.env.PASSWORD || "example-password";



app.get("/", (req, res) => {
  res.send("<h1>GlueOps init!</h1><h2>Username: " + username + " Password: " + password + "</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

