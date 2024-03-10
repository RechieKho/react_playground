import { Container, Typography } from "@mui/material";
import React from "react";

export default function TodoList() {
  return (
    <Container sx={{ my: "1em" }}>
      <Typography variant="h3" gutterBottom>
        Todo List
      </Typography>
      <Typography variant="body1">A To-Do List to be implemented.</Typography>
    </Container>
  );
}
