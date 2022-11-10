import React, { FC, useState } from "react";
import { ITodo } from "../../Types/todos";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: ITodo[];
  checkTodo: (id: ITodo["id"]) => void,
  deleteTodo: (id: ITodo["id"]) => void,
}

const TodoList: FC<TodoListProps> = ({ todos, checkTodo, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} deleteTodo={deleteTodo} checkTodo={checkTodo} todo={todo}/>
      ))}
    </div>
  );
};

export default TodoList;
