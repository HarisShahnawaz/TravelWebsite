import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import { MenuItems } from "./components/MenuItems";
import About from "./routes/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
