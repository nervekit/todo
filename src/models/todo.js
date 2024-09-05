import mongoose from "mongoose"
import {db} from "nerve";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
});

export const Todo = db.model("Todo", schema);
