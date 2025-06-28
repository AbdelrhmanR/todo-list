// src/context/TodoContext.jsx
import { createContext, useContext, useState } from "react";

// 1. إنشاء السياق
const TodoContext = createContext();

// 2. المزوّد العام
export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // ⬅️ نقلناه هنا ✅

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

  const updateTodo = (id, newTitle, newBody) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, body: newBody } : todo
      )
    );
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleComplete,
        updateTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

// 3. هوك للوصول للسياق بسهولة
export function useTodos() {
  return useContext(TodoContext);
}
