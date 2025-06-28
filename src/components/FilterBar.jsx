// src/components/FilterBar.jsx
import React from "react";
import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";
import { useTodos } from "../context/TodoContext";

function FilterBar() {
  const { filter, setFilter } = useTodos();

  const handleChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleChange}
        aria-label="todo filter"
        color="primary"
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default FilterBar;
