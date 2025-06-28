import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList"; // ⬅️ أضف السطر ده

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
        {/* هنضيف الليست هنا بعدين */}
      </div>
    </TodoProvider>
  );
}

export default App;
