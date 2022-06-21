const express = require("express");

const app = express();
const DB_USER = process.env.DB_USER || "missing-parameter";
const DB_NAME = process.env.DB_NAME || "missing-parameter";
const DB_PASS = process.env.DB_PASS || "missing-parameter";
const HOST = process.env.HOST || "missing-parameter"


const { Client } = require('pg');

const client = new Client({
  user: DB_USER,
  host: HOST,
  database: DB_NAME,
  password: DB_PASS,
  port: 5432,
})

client.connect();

client.query('SELECT NOW() as now', (err, res) => {
  if (err) {
    console.error(err)
  } else {
    console.log('stuff')
    console.log(res.rows[0])
  }
  client.end();
})

app.get("/", (req, res) => {
  res.send(
    "<h1>GlueOps June 21, 2022</h1>" +
      "<h2> DB </h2>" +
	"DB: <b>" + DB_NAME + "</b><br />" +
      "<h2> IP </h2>" +
	"Host IP: <b>" + "TBD" + "</b><br />"
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

