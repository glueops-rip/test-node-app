fetch = require('node-fetch');

const express = require("express");

const app = express();
const DB_USER = process.env.DB_USER || "missing-parameter";
const DB_NAME = process.env.DB_NAME || "missing-parameter";
const DB_PASS = process.env.DB_PASS || "missing-parameter";
const HOST = process.env.HOST || "missing-parameter"


const { Client } = require('pg')

const client = new Client ({
  user: DB_USER,
  password: DB_PASS,
  host: HOST,
  port: 5432,
  database: DB_NAME
})




app.get("/", (req, res) => {
  res.send(
    "<h1>GlueOps June 21, 2022</h1>" +
      "<h2> DB </h2>" +
	"DB: <b>" + DB_NAME + "</b><br />"
  );
});

app.get('/database', async (request, response) => {
    await client.connect()
    client.query('SELECT * FROM pg_catalog.pg_tables', (error, result) => {
        if (error) throw error;
 
        response.send(result.rows[0]);
    });
});

app.get('/ip', (request, response) => {
    fetch('https://api.ipify.org/?format=json')
    .then(res => res.text())
    .then(text => response.send(text));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));

