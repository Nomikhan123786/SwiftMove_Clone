import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
