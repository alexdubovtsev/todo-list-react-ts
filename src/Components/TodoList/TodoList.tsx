import React, { FC, useState } from "react";
import { ITodo } from "../../Types/todos";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo}/>
      ))}
    </div>
  );
};

export default TodoList;
