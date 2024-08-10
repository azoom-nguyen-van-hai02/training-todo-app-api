import { NextFunction, Request, Response } from "express";
import { TodoSchema } from "./../schemas/todo.js";
import { validateTodoId } from "./../helpers/todo.js";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const isValid = validateTodoId(id);

  if (!isValid) {
    return res.status(400).send({
      message: "Invalid Todo Id ",
    });
  }

  next();
};

export const validateTodoPayload = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const validateResult = TodoSchema.safeParse(req.body);

  if (!validateResult.success) {
    const errors = validateResult.error.errors.map((err) => ({
      path: err.path[0],
      message: err.message,
    }));

    return res.status(400).send({ errors });
  }
  req.body = validateResult.data;

  next();
};
