import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
        <h1>Todo List</h1>
        <TodoForm />
        <FilterBar />  
        <TodoList />
      </div>
    </TodoProvider>
  );
}
export default App;