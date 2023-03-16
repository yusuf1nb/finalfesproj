import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Movies from "./pages/Movies";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:imdbID" element={<MovieInfo />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
