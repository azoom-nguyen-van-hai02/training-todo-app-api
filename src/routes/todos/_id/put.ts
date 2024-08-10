import { Request, Response } from "express";
import { updateTodo, findTodoById } from "./../../../helpers/todo.js";
import {
  validateId,
  validateTodoPayload,
} from "./../../../middlewares/todo.js";
import { Todo } from "./../../../schemas/todo.js";

function handler(req: Request, res: Response) {
  const { description, status } = req.body as Todo;
  const id = +req.params.id;

  const existingTodo = findTodoById(id);
  if (!existingTodo) {
    res.status(404).send({
      message: "Not found",
    });
  }

  updateTodo(id, { description, status });
  const todo = findTodoById(id);

  return res.status(200).send(todo);
}

export default [validateId, validateTodoPayload, handler];
