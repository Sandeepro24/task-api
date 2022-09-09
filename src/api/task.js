const express = require("express");
const router = express();
const Todo = require("../database/mongo/schema/todo.schema");

router.route("/list").get(async (req, res) => {
  try {
    const getList = await Todo.find({});
    res.status(200).json({ data: getList, is_success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, is_success: false });
  }
});
router.route("/add").post(async (req, res) => {
  //destructuring
  const { taskName, taskDescription, creator, duration } = req.body;
  try {
    const task = await new Todo({
      taskName,
      taskDescription,
      creator,
      duration,
    }).save();
    res.status(200).json({ data: task, is_success: true });
  } catch (error) {
    res.status(500).json({ error: error.message, is_success: false });
  }
});

module.exports = router;
