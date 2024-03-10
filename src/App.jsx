import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";

import Calculator from "./pages/Calculator";
import Counter from "./pages/Counter";
import TodoList from "./pages/TodoList";

const PAGES = {
  Counter: <Counter></Counter>,
  TodoList: <TodoList></TodoList>,
  Calculator: <Calculator></Calculator>,
};

export default function App() {
  const [currentTab, setCurrentTab] = useState(Object.keys(PAGES)[0]);
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={(_, newValue) => {
            setCurrentTab(newValue);
          }}
          centered
        >
          {Object.keys(PAGES).map((e) => (
            <Tab key={e} label={e} value={e}></Tab>
          ))}
        </Tabs>
      </Box>
      {PAGES[currentTab]}
    </>
  );
}
