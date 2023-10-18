const express = require('express');
const app = express();
app.use(express.json());
const db =require("./connection");
const routes = require("./src/routes/route");
app.use(routes);
const config = require("./config");

app.listen(config.PORT, () => {
  console.log("Server is running at port no : ",config.PORT);
});

module.exports = app;