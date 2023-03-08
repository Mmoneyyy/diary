import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './component/home.js';
import Login from './component/login';
import Signup from "./component/signup.js";
import Add from "./component/add.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </div>
  );
}

export default App;