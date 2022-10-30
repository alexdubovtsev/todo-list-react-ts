import React, { FC, useState } from "react";
import classes from "./Header.module.css";

export interface HeaderProps {
  todoCount: number;
}

const Header: FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={classes.header__container}>
      <div className={classes.header__title}>
        Todo list <b>{todoCount}</b> task(s)
      </div>
    </div>
  );
};

export default Header;
