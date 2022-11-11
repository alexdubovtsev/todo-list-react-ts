import React, { FC, useState } from "react";
import { ITodo } from "../../Types/todos";
import useTodo from "../../Utils/Contextes/useTodo";
import TodoInput from "../TodoInput/TodoInput";
import TodoItem from "./TodoItem/TodoItem";



const TodoList: FC = () => {
  const {todos, todoIdForEdit, checkTodo, deleteTodo, selectTodoIdForEdit} = useTodo();
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return (
            <TodoInput
              key={todo.id}
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
