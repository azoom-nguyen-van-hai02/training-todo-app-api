import { Request, Response } from "express";
import { TODO_STATUS } from "../../constants.js";
import { Todo, todos } from "../../data.js";

export default function (req: Request, res: Response) {
  const type = req.query.type;
  const validQuery =
    type === undefined ||
    (type !== "" && Object.values(TODO_STATUS).includes(+type));

  if (!validQuery) {
    return res.status(400).send();
  }

  let returnTodos = [];

  if (type !== undefined) {
    const todoStatus = Number(type);

    returnTodos = todos.filter((todo: Todo) => todo.status === todoStatus);
  } else {
    returnTodos = todos;
  }

  res.status(200).send(returnTodos);
}
