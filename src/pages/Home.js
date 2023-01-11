import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Crosshair from "../components/Crosshair";
import ScreenOverlay from "../components/ScreenOverlay";

function Home() {
  return (
    <div>
      <div className="main-content">
        <ScreenOverlay></ScreenOverlay>
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
