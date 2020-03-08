const express = require("express");
const expressHandlebars = require("express-handlebars");

// create express app
const app = express();

// set port
const PORT = process.env.PORT || 3006;

// import database connection
const connection = require("./config/connection");

// import routes
const routes = require("./routes");

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set up and turn on routes
app.use(routes);

// connect to db
connection.connect(err => {
  if (err) {
    throw new Error(err);
  }
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});