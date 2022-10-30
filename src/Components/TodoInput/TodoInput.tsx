import React, { FC, useState } from "react";
import Button from "../Button/Button";
import classes from "./TodoInput.module.css";
import { ITodo } from "../../Types/todos";

const DEFAULT_TODO = {
  title: "",
  description: "",
};

interface TodoInputProps {
  addTodo: ({ title, description }: Omit<ITodo, "completed" | "id">) => void;
}

const TodoInput: FC<TodoInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const clickHandler = () => {
    addTodo({ title: todo.title, description: todo.description });
    setTodo(DEFAULT_TODO);
  };

  return (
    <div className={classes.todo_input__body}>
      <div className={classes.body_todo__inputs}>
        <div className={classes.body_todo__input}>
          <label htmlFor="title">
            <div>Task</div>
            <input
              type="text"
              id="title"
              value={todo.title}
              name="title"
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className={classes.body_todo__input}>
          <label htmlFor="name">
            <div>Description</div>
            <input
              type="text"
              id="description"
              value={todo.description}
              name="description"
              onChange={changeHandler}
            />
          </label>
        </div>
      </div>
      <div>
        <div className={classes.button}>
          <Button color="blue" onClick={clickHandler}>
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
