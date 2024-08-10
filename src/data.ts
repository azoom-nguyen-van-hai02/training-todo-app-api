import { Todo } from "./schemas/todo.js";
import { generateTodos } from "./helpers/todo.js";

export const todos: Todo[] = generateTodos();
