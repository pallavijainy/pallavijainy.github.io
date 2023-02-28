import React from "react";
import "./Sidebar.css";
import { Link } from "react-scroll";
// import download from "../Download/Pallavi_Jain_Resume (1).pdf"
function Sidebar({ sidebar, close }) {
  function handleClick() {
    window.open(
      "https://drive.google.com/uc?export=download&id=1YAp-ywxagyg4lRCHMDKg6z4jAPTq8CEP",
      "_blank"
    );
  }

  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={close}
      >
        <li>Home</li>
      </Link>
      <Link
        activeClass="active"
        to="aboutme"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={close}
      >
        <li>About Me</li>
      </Link>
      <Link
        activeClass="active"
        to="works"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={close}
      >
        <li>Skills</li>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={close}
      >
        <li>Projects</li>
      </Link>
      <Link
        activeClass="active"
        to="github"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={close}
      >
        <li>Github</li>
      </Link>
      <Link
        activeClass="active"
        to="footer"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={close}
      >
        <li>Contact</li>
      </Link>

      <li onClick={handleClick}>
        <a
          href="https://drive.google.com/uc?export=download&id=1YAp-ywxagyg4lRCHMDKg6z4jAPTq8CEP"
          download="fw20_0577-Pallavi-Jain-Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </li>
    </div>
  );
}

export default Sidebar;
