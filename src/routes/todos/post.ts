import { validateTodoPayload } from "./../../middlewares/todo.js";
import { Todo } from "../../schemas/todo.js";
import { Request, Response } from "express";
import { todos } from "../../data.js";

function handler(req: Request, res: Response) {
  const id = Number((Math.random() * 1000).toFixed(0));
  const { description, status } = req.body as Todo;
  const todo = {
    id,
    description,
    status,
  };

  todos.push(todo);

  res.status(201).send(todo);
}

export default [validateTodoPayload, handler];
