import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Contact from "./pages/Contact";
import WebStuff from "./pages/WebStuff";
import Art from "./pages/Art";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-media" element={<Art />} />
          <Route path="/web" element={<WebStuff />} />
          <Route element={<NoMatch />} />
        </Routes>
       
      </Router>
  );
}

export default App;
