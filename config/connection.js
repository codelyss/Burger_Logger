const mysql = require("mysql");

// load environment variables
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  console.log("We're in production");
} else {
  console.log("We're in development");
}

// create connection to db
const connection = process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  });

module.exports = connection;
