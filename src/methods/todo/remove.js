import { ErrorMessage, MethodError, idSchema } from "nerve";
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
  items: idSchema,
  minItems: 1,
  maxItems: 1,
};
