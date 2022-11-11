import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";



const useTodo = () => useContext(TodoContext);

export default useTodo;