import React, { FC, useState } from "react";
import useTodo from "../../Utils/Contextes/useTodo";
import classes from "./Header.module.css";

const Header: FC = () => {
  const {todos} = useTodo();

  return (
    <div className={classes.header__container}>
      <div className={classes.header__title}>
        Todo list <b>{todos.length}</b> task(s)
      </div>
    </div>
  );
};

export default Header;
