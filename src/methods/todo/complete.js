import { Todo } from "../../models/todo.js";

export default async (id, complete) => {
  await Todo.findByIdAndUpdate(id, { complete: complete });
};

export const schema = {
  type: "array",
  items: [
    { type: "string", minLength: 1, maxLength: 128 },
    { type: "boolean" },
  ],
  minItems: 2,
  maxItems: 2,
};
