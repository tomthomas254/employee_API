const mysql = require('mysql');
const config = require('./config');
const db = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
  });

  module.exports = db;