import { ErrorMessage, idSchema, MethodError } from "nerve";
import { Todo } from "../../models/todo.js";

export default async (id, completed) => {
  const doc = await Todo.findByIdAndUpdate(id, { completed: completed });
  if (!doc) {
    throw new MethodError(ErrorMessage.NOT_FOUND);
  }
};

export const schema = {
  type: "array",
  items: [idSchema, { type: "boolean" }],
  minItems: 2,
  maxItems: 2,
};
