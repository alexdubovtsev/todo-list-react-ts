import "./Styles/App.css";
import React, { useState } from "react";
import { ITodo } from "./Types/todos";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";
import { TodoProvider } from "./Utils";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <Header />
        <TodoInput mode="add" />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
