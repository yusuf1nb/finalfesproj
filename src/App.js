import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Recommended from "./components/Recommended";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Landing/>
      <Recommended/>
    </div>
    </Router>
  );
}

export default App;
