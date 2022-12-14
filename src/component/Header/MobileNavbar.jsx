import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function MobileNavbar({sidebar}) {
  return (
    <div className="mobile_parent_container">
      <div className="mobile_bars">
        {
          sidebar ? <FontAwesomeIcon className="open_bars closeit" icon={faXmark} /> : <FontAwesomeIcon className="open_bars" icon={faBars} />
        }
      </div>
    </div>
  );
}

export default MobileNavbar;