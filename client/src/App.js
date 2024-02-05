import React from "react";
import './App.css'
import BookList from "./components/BookList";
import Header from "./components/Header";
import { Box } from "@mui/material";
function App() {
  
  return (
    <Box className="App">
      <Header/>
      <BookList/>
    </Box>
  );
}

export default App;
