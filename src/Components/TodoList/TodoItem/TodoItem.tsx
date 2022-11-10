import React, { FC, useState } from "react";
import { ITodo } from "../../../Types/todos";
import Button from "../../Button/Button";
import classes from "./TodoItem.module.css";

interface TodoItemProps {
  todo: ITodo;
  checkTodo: (id: ITodo["id"]) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, checkTodo }) => {
  return (
    <div className={classes.todo_item}>
      <div>
        <div
          aria-hidden
          // style={{
          //   opacity: todo.completed ? 0.5 : 1,
          //   textDecoration: todo.completed ? "line-through" : "none",
          // }}
          className={
            todo.completed
              ? `${classes.todo_item__title} ${classes.todo_item__title_complited}`
              : `${classes.todo_item__title}`
          }
          onClick={() => checkTodo(todo.id)}
        >
          {todo.title}
        </div>
        <div aria-hidden className={classes.todo_item__description}>
          {todo.description}
        </div>
      </div>
      <div className={classes.todo_item__btns}>
        <Button color="blue">Edit</Button>
        <Button color="red">Delete</Button>
      </div>
    </div>
  );
};

export default TodoItem;
