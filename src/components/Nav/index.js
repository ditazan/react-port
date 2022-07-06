import React from "react";
import { Link } from "react-router-dom";
import ScreenOverlay from "../ScreenOverlay";
import "./nav.css";

function Nav() {
  return (
    <div>
      <ScreenOverlay></ScreenOverlay>
      <div className="menus">
        <nav>
          <div className="left-menu">
            <Link to="/contact">contact</Link>
            <Link to="/#about">about</Link>
          </div>
          <div className="right-menu">
            <Link to="/web">web</Link>
            <Link to="/new-media">new media</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
