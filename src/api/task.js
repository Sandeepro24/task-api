// Requiring modules
const express = require("express");
const router = express();
const Todo = require("../database/mongo/schema/todo.schema");


//Making Get request to get the list of all task
router.route("/list").get(async (req, res) => {
  try {
    const getList = await Todo.find({}); // it will find all the task
    res.status(200).json({ data: getList, is_success: true }); // sending all task as list to the client
  } catch (error) {
    res.status(500).json({ message: error.message, is_success: false }); 
  }
});

//Post method to add task to the database
router.route("/add").post(async (req, res) => {
  const { taskName, taskDescription, creator, duration } = req.body;////destructuring
  try {
    const task = await new Todo({ //creating new task
      taskName,
      taskDescription,    //assigning values what we got from through post method
      creator,
      duration,
    }).save();  // saving to the database
    res.status(200).json({ data: task, is_success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, is_success: false });
  }
});

module.exports = router;
