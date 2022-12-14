import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

import { MoonIcon, SunIcon } from '@chakra-ui/icons';


import "./Header.css";
import MobileNavbar from "./MobileNavbar";

function WebNavbar({func,sidebar}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="container">
      <div className="name">
    
        <p>
          PALLAVI <span>JAIN</span>
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
            to="about"
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
            to="skills"
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
            to="projects"
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
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button>CONTACT & RESUME</button>
          </Link>
        </div>
        <div >
        <Button onClick={toggleColorMode}>
                {colorMode === 'light' ?   <SunIcon color={"black"}/>: <MoonIcon />}
              </Button>
        </div>
        <div className="mobile_menu_bars" style={{marginLeft:"15px"}} onClick={func}>
          <MobileNavbar sidebar={sidebar}></MobileNavbar>
        </div>
      </div>
    </div>
  );
}

export default WebNavbar;