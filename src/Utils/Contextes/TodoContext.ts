import React, { useState } from "react";
import { ITodo } from "../../Types/todos";

export interface TodoContextProps {
  todos: ITodo[];
  todoIdForEdit: ITodo["id"] | null;
  checkTodo: (id: ITodo["id"]) => void;
  deleteTodo: (id: ITodo["id"]) => void;
  selectTodoIdForEdit: (id: ITodo["id"]) => void;
  changeTodo: ({ title, description }: Omit<ITodo, "completed" | "id">) => void;
  addTodo: ({ title, description }: Omit<ITodo, "completed" | "id">) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  checkTodo: () => {},
  deleteTodo: () => {},
  selectTodoIdForEdit: () => {},
  changeTodo: () => {},
  addTodo: () => {},
}) ;