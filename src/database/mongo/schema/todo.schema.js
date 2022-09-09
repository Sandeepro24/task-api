const mongoose = require("mongoose");

//Creating Schema of our database
const todoSchema = mongoose.Schema(
  {
    taskName: { type: String, required: true },
    taskDescription: { type: String },
    creator: { type: String, required: true },
    duration: { type: Number, required: true },
  },
  { timestamps: true } // time of creation 
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
