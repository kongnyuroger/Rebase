import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LogIn from "./components/login/LogIn";
import Home from "./components/section1/Home";
import Testimonail from "./components/section2/Testimonail";
import Program from "./components/section3/Program";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Testimonail />
      <Program />
    </div>
  );
}

export default App;
