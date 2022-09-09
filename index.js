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
cron.schedule(`*/1 * * * * *`, async () => {  //run every second
  const todos = await Todo.find({});   //finding all task
  todos.forEach((todo) => {    //visiting each task one by one
    const currentTime = moment(new Date());   //current time
    const createdAt = moment(todo.createdAt);  //creation time of task
    const timeDifference = currentTime.diff(createdAt, "minutes");  // calculating time difference between current time and time of creation of task
    if (timeDifference >= todo.duration) {    // now checking if time difference is greater than or equal to the duration(time assigned to each task at the time of creation post which it should be deleted) 
      Todo.findByIdAndDelete(todo._id, function (err, docs) { // if above condition true then find that task using unique id and delete it.
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
