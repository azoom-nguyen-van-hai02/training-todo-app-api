import { TODO_STATUS } from "../constants.js";
import { z } from "zod";

export const TodoSchema = z.object({
  id: z.number().optional(),
  description: z
    .string({ message: "Description must be non-empty string" })
    .min(1)
    .trim(),
  status: z.number({ message: "Status must be number" }).refine(
    (value) => {
      return Object.values(TODO_STATUS).includes(value);
    },
    {
      message:
        "Status must be a number in " + Object.values(TODO_STATUS).join(", "),
    }
  ),
});

export type Todo = z.infer<typeof TodoSchema>;

export const QueryTodoSchema = z.object({
  status: z
    .string()
    .optional()
    .refine(
      (status) =>
        status === undefined || Object.values(TODO_STATUS).includes(+status),
      {
        message: "Status must be a number in " + Object.values(TODO_STATUS),
      }
    )
    .transform((status) => (status !== undefined ? +status : status)),
});
