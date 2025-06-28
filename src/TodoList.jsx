// src/TodoList.jsx
import React, { useState } from "react";
import { useTodos } from "./context/TodoContext";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  TextField,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function TodoList() {
  const { todos, deleteTodo, toggleComplete, updateTodo } = useTodos();
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditBody(todo.body);
  };

  const saveEdit = (id) => {
    updateTodo(id, editTitle, editBody);
    setEditingId(null);
    setEditTitle("");
    setEditBody("");
  };

  return (
    <Box>
      {todos.length === 0 ? (
        <p>No todos yet.</p>
      ) : (
        <List>
          {todos.map((todo) => (
            <ListItem
              key={todo.id}
              alignItems="flex-start"
              secondaryAction={
                <>
                  <IconButton onClick={() => startEditing(todo)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {editingId === todo.id ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <TextField
                    label="Title"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <TextField
                    label="Details"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    multiline
                    rows={2}
                  />
                  <Button
                    variant="outlined"
                    onClick={() => saveEdit(todo.id)}
                    size="small"
                  >
                    Save
                  </Button>
                </Box>
              ) : (
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
              )}
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default TodoList;
