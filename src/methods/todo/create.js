import { Todo, view } from "../../models/todo.js";

export default async (title) => {
  const doc = await Todo.create({ title: title });
  return view(doc);
};

export const schema = {
  type: "array",
  items: { type: "string", minLength: 1, maxLength: 128 },
  minItems: 1,
  maxItems: 1,
};
