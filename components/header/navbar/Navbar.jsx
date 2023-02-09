import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li
            onClick={() => {
              localStorage.setItem("activeMenu", "home");
              window.location.reload(true);
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              localStorage.setItem("activeMenu", "about");
              window.location.reload(true);
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              localStorage.setItem("activeMenu", "skills");
              window.location.reload(true);
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              localStorage.setItem("activeMenu", "education");
              window.location.reload(true);
            }}
          >
            Education
          </li>
          <li
            onClick={() => {
              localStorage.setItem("activeMenu", "work");
              window.location.reload(true);
            }}
          >
            Work
          </li>
          <li
            onClick={() => {
              localStorage.setItem("activeMenu", "experience");
              window.location.reload(true);
            }}
          >
            Experience
          </li>
          <li
            onClick={() => {
              localStorage.setItem("activeMenu", "contact");
              window.location.reload(true);
            }}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
