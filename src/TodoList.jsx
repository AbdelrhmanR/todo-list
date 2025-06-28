// src/TodoList.jsx
import React from "react";
import { useTodos } from "./context/TodoContext";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoList() {
  const { todos, deleteTodo, toggleComplete } = useTodos();

  return (
    <Box>
      {todos.length === 0 ? (
        <Typography color="text.secondary">No todos yet.</Typography>
      ) : (
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <ListItemText
                primary={
                  <span
                    style={{
                      textDecoration: todo.completed ? "line-through" : "none",
                    }}
                  >
                    {todo.title}
                  </span>
                }
                secondary={todo.body}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default TodoList;
