/*Requiring important module*/
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cron = require("node-cron");
const moment = require("moment");
const Todo = require("./src/database/mongo/schema/todo.schema");

require("dotenv").config({ path: "./env/.env" });

const PORT = process.env.PORT || 3000;

const app = express();

//middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//mongoDB connection
require("./src/database/connection");

//Path to routers
app.use("/v1", require("./src/router/routes"));

//Using nodejs cron to schedule a task for deletion of documents based on creation Time
cron.schedule(`*/1 * * * * *`, async () => {
  const todos = await Todo.find({});
  todos.forEach((todo) => {
    const currentTime = moment(new Date());
    const createdAt = moment(todo.createdAt);
    const timeDifference = currentTime.diff(createdAt, "minutes");
    if (timeDifference >= todo.duration) {
      Todo.findByIdAndDelete(todo._id, function (err, docs) {
        if (!err) {
          console.log(docs);
        } else {
          console.log(err);
        }
      });
    }
  });
});


app.listen(PORT, function () {
  console.log("Server is running on ", PORT);
});
