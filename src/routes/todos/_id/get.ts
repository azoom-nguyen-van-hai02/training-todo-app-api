import { Request, Response } from "express";
import { validateId } from "./../../../middlewares/todo.js";
import { findTodoById } from "./../../../helpers/todo.js";

function handler(req: Request, res: Response) {
  const todoId = +req.params.id;

  const todo = findTodoById(todoId);

  if (!todo) {
    return res.status(404).send({
      message: "Todo not found",
    });
  }

  return res.send(todo);
}

export default [validateId, handler];
