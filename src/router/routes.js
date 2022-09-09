const express = require("express");
const app = express();

// http://localhost:3000/v1/task

// Todo
// GET and POST

app.use("/task", require("../api/task")); 

module.exports = app;
