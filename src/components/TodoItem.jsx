// src/components/TodoItem.jsx
import React, { useState } from "react";
import {
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
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { deleteTodo, toggleComplete, updateTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editBody, setEditBody] = useState(todo.body);

  const saveEdit = () => {
    updateTodo(todo.id, editTitle, editBody);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <>
          <IconButton onClick={startEditing}>
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

      {isEditing ? (
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
          <Button variant="outlined" onClick={saveEdit} size="small">
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
  );
}

export default TodoItem;
