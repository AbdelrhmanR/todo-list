// src/context/TodoContext.jsx
import { createContext, useContext, useState } from "react";

// 1. إنشاء السياق
const TodoContext = createContext();

// 2. المزوّد العام
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, body) => {
    const newTodo = {
      id: Date.now(),
      title,
      body,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
}

// 3. هوك للوصول للسياق بسهولة
export function useTodos() {
  return useContext(TodoContext);
}