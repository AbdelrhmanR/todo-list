// src/components/TodoForm.jsx
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useTodos } from "../context/TodoContext";

// Task 5: TodoForm to add todos using MUI and Context
function TodoForm() {
  const { addTodo } = useTodos();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      addTodo(title, body);
      setTitle("");
      setBody("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}
    >
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Details"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        multiline
        rows={3}
        required
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
}

export default TodoForm;
