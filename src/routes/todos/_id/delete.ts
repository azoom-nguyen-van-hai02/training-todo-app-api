import { Request, Response } from "express";
import { deleteTodo, findTodoById } from "./../../../helpers/todo.js";
import { validateId } from "./../../../middlewares/todo.js";

function handler(req: Request, res: Response) {
  const todoId = +req.params.id;
  const existingTodo = findTodoById(todoId);

  if (!existingTodo) {
    res.status(404).send({
      message: "Not found",
    });
  }

  deleteTodo(todoId);

  return res.status(200).send();
}

export default [validateId, handler];
