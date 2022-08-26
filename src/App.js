import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import LogIn from "./components/login/LogIn";
import Home from "./components/section1/Home";
import Testimonail from "./components/section2/Testimonail";
import Program from "./components/section3/Program";
import Companies from "./components/section4/Companies";
import Curriculum from "./components/section5/Curriculum";
import SignUp from "./components/section6/SignUp";
import FindUs from "./components/section7/FindUs";
import Experience from "./components/section8/Experience";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Testimonail />
      <Program />
      <Companies />
      <Curriculum />
      <SignUp />
      <FindUs />
      <Experience />
    </div>
  );
}

export default App;
