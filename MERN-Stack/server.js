//*Require block
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

const app = express();

//* Middleware block
app.use(logger("dev"));
app.use(express.json());
// app.use(favicon(path.join(__dirname, "dist", "favicon.ico")));
app.use(express.static(path.join(__dirname, "dist")));

//* routes block

//* listen block

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
