import React, { FC, useState } from "react";
import { ITodo } from "../../Types/todos";
import TodoInput from "../TodoInput/TodoInput";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: ITodo[];
  todoIdForEdit: ITodo["id"] | null;
  checkTodo: (id: ITodo["id"]) => void;
  deleteTodo: (id: ITodo["id"]) => void;
  selectTodoIdForEdit: (id: ITodo["id"]) => void;
  changeTodo: ({ title, description }: Omit<ITodo, "completed" | "id">) => void;
}

const TodoList: FC<TodoListProps> = ({
  todos,
  checkTodo,
  deleteTodo,
  todoIdForEdit,
  selectTodoIdForEdit,
  changeTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return (
            <TodoInput
              key={todo.id}
              changeTodo={changeTodo}
              editTodo={{
                title: todo.title,
                description: todo.description,
              }}
              mode="edit"
            />
          );
        return (
          <TodoItem
            key={todo.id}
            deleteTodo={deleteTodo}
            checkTodo={checkTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
            todo={todo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
