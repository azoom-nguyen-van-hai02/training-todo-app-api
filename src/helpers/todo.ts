import { todos } from "./../data.js";
import { TODO_STATUS } from "./../constants.js";
import { Todo } from "./../schemas/todo.js";
import e from "express";

export function generateTodos(): Todo[] {
  const todos: Todo[] = [];
  for (let i = 1; i <= 10; i++) {
    const todo: Todo = {
      id: i,
      description: `Todo item ${i}`,
      status: i % 2 === 0 ? TODO_STATUS.done : TODO_STATUS.todo, // Alternate between done and todo
    };
    todos.push(todo);
  }
  return todos;
}

export const validateTodoId = (todoId: string): boolean => {
  return Boolean(todoId) && !Number.isNaN(+todoId);
};

export const findTodoIndexById = (id: number): number => {
  return todos.findIndex((todo) => todo.id === id);
};

export const findTodoById = (id: number): Todo | undefined => {
  return todos.find((todo) => todo.id === id);
};

export const updateTodo = (id: number, payload: Todo): void => {
  const todoIndex = findTodoIndexById(id);

  todos[todoIndex] = { ...todos[todoIndex], ...payload };
};

export const deleteTodo = (id: number): void => {
  const todoIndex = findTodoIndexById(id);

  todos.splice(todoIndex, 1);
};
