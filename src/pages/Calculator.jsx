import { Container, Typography } from "@mui/material";
import React from "react";

export default function Calculator() {
  return (
    <Container sx={{ my: "1em" }}>
      <Typography variant="h3" gutterBottom>
        Calculator
      </Typography>
      <Typography variant="body1">A Calculator to be implemented.</Typography>
    </Container>
  );
}
