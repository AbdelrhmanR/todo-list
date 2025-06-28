import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./TodoForm";

function App() {
  return (
    <TodoProvider>
      <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
        <h1>Todo List</h1>
        <TodoForm />
        {/* هنضيف الليست هنا بعدين */}
      </div>
    </TodoProvider>
  );
}

export default App;
