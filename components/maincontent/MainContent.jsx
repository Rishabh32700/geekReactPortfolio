import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Home from "./home/Home";
import "./maincontent.css";
import Skills from "./skills/Skills";
import Work from "./work/Work";

const MainContent = () => {
  return (
    <>
      <div className="mainContent">
        {
        localStorage.getItem("activeMenu") === "home" ? (
          <Home/>
        ) : localStorage.getItem("activeMenu") === "about" ? (
          <About />
        ) : localStorage.getItem("activeMenu") === "skills" ? (
          <Skills/>
        ) : localStorage.getItem("activeMenu") === "education" ? (
          <Education />
        ) : localStorage.getItem("activeMenu") === "work" ? (
          <Work />
        ) : localStorage.getItem("activeMenu") === "experience" ? (
          <Experience/>
        ) : localStorage.getItem("activeMenu") === "contact" ? (
          <Contact/>
        ) : <Home/>
        }
      </div>
    </>
  );
};

export default MainContent;
