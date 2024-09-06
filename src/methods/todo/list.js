import { Todo, view } from "../../models/todo.js";

export default async (completed) => {
  let query;
  if (completed !== undefined) {
    query = { completed: completed };
  }
  const docs = await Todo.find(query);
  return docs.map(view);
};

export const schema = {
  type: "array",
  items: { type: "boolean" },
  maxItems: 1,
};
