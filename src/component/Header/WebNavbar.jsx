import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import "./Header.css";
import MobileNavbar from "./MobileNavbar";

function WebNavbar({ func, sidebar }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleClick=()=> {
    window.open(
      "https://drive.google.com/uc?export=download&id=1YAp-ywxagyg4lRCHMDKg6z4jAPTq8CEP",
      "_blank"
    );
  }

  return (
    <div className="container">
      <div className="name">
        <p>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            PALLAVI <span>JAIN</span>
          </Link>
        </p>
      </div>
      <div className="details">
        <div className="links_container">
          <Link
            className="button"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button>HOME</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="aboutme"
            spy={true}
            smooth={true}
            offset={20}
            duration={500}
          >
            <button>ABOUT ME</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button>SKILLS</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>PROJECT</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="github"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <button>GITHUB</button>
          </Link>
          <Link
            className="button"
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button>CONTACT</button>
          </Link>
         
        </div>

        <button onClick={handleClick} >RESUME</button>

        <div>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <SunIcon color={"black"} /> : <MoonIcon />}
          </Button>
        </div>
        <div
          className="mobile_menu_bars"
          style={{ marginLeft: "15px" }}
          onClick={func}
        >
          <MobileNavbar sidebar={sidebar}></MobileNavbar>
        </div>
      </div>
    </div>
  );
}

export default WebNavbar;
