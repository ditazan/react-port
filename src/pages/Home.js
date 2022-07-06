import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Crosshair from "../components/Crosshair";

function Home() {
  return (
    <div>
      <Nav></Nav>
      <div className="main-content">
        <Hero></Hero>
        <About></About>
      </div>

      {/* <div className="scene">
      <div id="cube" className="cube">
        <section id="main" className="main cube-face"></section>
        <section id="top" className=" cube-face"></section>
        <section id="bottom" className="cube-face"></section>
      </div>
    </div> */}
    </div>
  );
}

export default Home;
