import "./Styles/App.css";
import React, { useState } from "react";
import { ITodo } from "./Types/todos";
import Header from "./Components/Header/Header";
import TodoInput from "./Components/TodoInput/TodoInput";
import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  const DEFAULT_TODO_LIST: ITodo[] = [
    { id: 1, title: "task 1", description: "description 1", completed: false },
    { id: 2, title: "task 2", description: "description 2", completed: false },
    {
      id: 3,
      title: "task 3",
      description:
        "so long task description 3 so long task description so long task description so long task description so long task description",
      completed: true,
    },
  ];

  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  const addTodo = ({ title, description }: Omit<ITodo, "completed" | "id">) => {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        title,
        description,
        completed: false,
      },
    ]);
  };

  const checkTodo = (id: ITodo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: ITodo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <Header todoCount={todos.length} />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    </div>
  );
};

export default App;
