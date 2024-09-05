import mongoose from "mongoose"

export const name = "Todo";
export const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
});


