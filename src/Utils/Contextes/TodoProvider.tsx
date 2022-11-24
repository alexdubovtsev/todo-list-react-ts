import React, { FC, useEffect, useMemo, useState } from "react";
import { ITodo } from "../../Types/todos";
import { TodoContext } from "./TodoContext";
import axios from "axios";

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: FC<TodoProviderProps> = ({ children }) => {
  const DEFAULT_TODO_LIST: ITodo[] = [
    { id: 6, title: "Task 1", description: "Description 1", completed: false },
    // { id: 2, title: "task 2", description: "description 2", completed: false },
    // {
    //   id: 3,
    //   title: "task 3",
    //   description:
    //     "so long task description 3 so long task description so long task description so long task description so long task description",
    //   completed: true,
    // },
  ];

  const [todos, setTodos] = useState<ITodo[]>(DEFAULT_TODO_LIST);
  const [todoIdForEdit, setTodoIdForEdit] = useState<ITodo["id"] | null>(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      setTodos([...todos, ...response.data]);
    } catch (error) {
      alert(error);
    }
  }

  const selectTodoIdForEdit = (id: ITodo["id"]) => {
    setTodoIdForEdit(id);
  };

  const addTodo = ({ title, description }: Omit<ITodo, "completed" | "id">) => {
    setTodos([
      ...todos,
      {
        id: todos.length == 0 ? 0 : todos[todos.length - 1].id + 1,
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
    if (window.confirm("Are you sure?")) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const changeTodo = ({
    title,
    description,
  }: Omit<ITodo, "completed" | "id">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, title, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  const value = useMemo(
    () => ({
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      checkTodo,
    }),
    [
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      checkTodo,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
