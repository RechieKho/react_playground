import { Container, Typography } from "@mui/material";
import React from "react";

export default function Counter() {
  return (
    <Container sx={{ my: "1em" }}>
      <Typography variant="h3" gutterBottom>
        Counter
      </Typography>
      <Typography variant="body1">A Counter to be implemented.</Typography>
    </Container>
  );
}
