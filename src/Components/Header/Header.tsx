import React, { FC, useState } from "react";
import useTodo from "../../Utils/Contextes/useTodo";
import classes from "./Header.module.css";

const Header: FC = () => {
  const {todos} = useTodo();

  return (
    <div className={classes.header__container}>
      <div className={classes.header__title}>
        You have <b style={{color: '#c93d4b'}}>{todos.length}</b> ToDo task(s)
      </div>
    </div>
  );
};

export default Header;
