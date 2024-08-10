import { Request, Response } from "express";
import { Todo, QueryTodoSchema } from "./../../schemas/todo.js";
import { todos } from "../../data.js";

export default function (req: Request, res: Response) {
  const validateResult = QueryTodoSchema.safeParse(req.query);

  if (!validateResult.success) {
    const errors = validateResult.error.errors.map((err) => ({
      path: err.path[0],
      message: err.message,
    }));

    return res.status(400).send({ errors });
  }

  let returnTodos = [];
  const { status: type } = validateResult.data;

  if (type !== undefined) {
    const todoStatus = Number(type);

    returnTodos = todos.filter((todo: Todo) => todo.status === todoStatus);
  } else {
    returnTodos = todos;
  }

  res.status(200).send(returnTodos);
}
