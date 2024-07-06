import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "routes/Home";
import Details from "routes/Details";
import NotFound from "routes/NotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
