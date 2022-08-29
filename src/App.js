import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/login/LogIn";
import HomePage from "./components/homepage/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path='log-in' exact element={<LogIn/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
