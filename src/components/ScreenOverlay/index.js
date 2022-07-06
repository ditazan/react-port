import React from "react";

import "./style.css";

function ScreenOverlay() {
  return (
    <div className="overlay">
      <div className="scene">
        <div id="cube" className="cube">
          <div id="main" className="left cube-face">
          </div>
          
          <section id="top" className="top cube-face">
          </section>
          <section id="bottom" className="bottom cube-face">
          </section>
        </div>
      </div>
    </div>
  );
}

export default ScreenOverlay;