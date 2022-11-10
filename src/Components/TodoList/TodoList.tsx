import React, { FC, useState } from "react";
import { ITodo } from "../../Types/todos";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: ITodo[];
  checkTodo: (id: ITodo["id"]) => void
}

const TodoList: FC<TodoListProps> = ({ todos, checkTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem checkTodo={checkTodo} todo={todo}/>
      ))}
    </div>
  );
};

export default TodoList;
