import {models} from "../../app.js"

export default async (title) => {
    await models.Todo.create({title: title})
}

export const schema = {
    type: "array",
    items: [
        { type: "string", minLength: 1, maxLength: 128 },
    ],
    minItems: 1,
    maxItems: 1,
};