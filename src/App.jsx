import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/explore";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
