const express = require("express");
const app = express();

// http://localhost:8080/v1

// Todo
// GET and POST

app.use("/task", require("../api/task"));

module.exports = app;
