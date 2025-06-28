// src/components/TodoList.jsx
import React from "react";
import { useTodos } from "../context/TodoContext";
import { List, Typography, Divider } from "@mui/material";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <Typography variant="h6">No todos yet</Typography>;
  }

  return (
    <List>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <TodoItem todo={todo} />
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
}

export default TodoList;
