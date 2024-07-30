import { Request, Response } from "express";
import { validateTodo } from "../post.js";
import { Todo, todos } from "../../../data.js";

export default function (req: Request, res: Response) {
  const isValidBody = validateTodo(req.body);

  if (!isValidBody) {
    res.status(400).send({
      message: "Invalid body",
    });
  }
  const { description, status, id } = req.body as Todo;
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    res.status(404).send({
      message: "Not found",
    });
  }

  todos[todoIndex] = { ...todos[todoIndex], description, status };

  return res.status(200).send();
}
