import React, { FC, useState } from "react";
import classes from "./Button.module.css";

// наследуемся от интерфейса ComponentPropsWithRef, прокидывая туда button, чтобы не дублировать методы, которые есть в React (onClick и тд)
interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color: "orange" | "blue" | "red";
}

const Button: FC<ButtonProps> = ({ children, color, onClick, ...props }) => {
  const className = `${classes.Button} ${classes[`Button_${color}`]}`;

  return <button className={className} onClick={onClick} {...props}>
    {children}
  </button>;
};

export default Button;
