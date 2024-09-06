import { ErrorMessage, MethodError } from "nerve";
import { Todo, view } from "../../models/todo.js";

export default async (id) => {
  const doc = await Todo.findByIdAndDelete(id);
  if (!doc) {
    throw new MethodError(ErrorMessage.NOT_FOUND);
  }
  return view(doc);
};

export const schema = {
  type: "array",
  items: { type: "string", minLength: 1, maxLength: 128 },
  minItems: 1,
  maxItems: 1,
};
