import React from "react";

// PULL IN THE NESSESSARY PROPS
function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <nav>
        {/* ON EACH CLICK, UPDATE THE 'CURRENT-PAGE' THROUGH THE 'HANDLE-PAGE-CHANGE' */}
        {/* WHEN ACTIVE, ADD AN 'ACTIVE' CLASS FOR HIGHLIGHTING THE NAV SELECTION */}
        <ul className="flex-row">
          <li className="mx-2">
            {" "}
            <h2>
              <a href="/">Dita Zanelli</a>
            </h2>
          </li>
          <li className="mx-2">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "active nav-link scrollto"
                  : "nav-link scrollto"
              }
            >
              <span>About</span>
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "active nav-link scrollto"
                  : "nav-link scrollto"
              }
            >
              <span>Portfolio</span>
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "active nav-link scrollto"
                  : "nav-link scrollto"
              }
            >
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
