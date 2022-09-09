const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    taskName: { type: String, required: true },
    taskDescription: { type: String },
    creator: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
