import React from "react";
import "./Backdrop.css";
export default function Backdrop({ sidebar, close }) {
  return (
    <div
      className={sidebar ? "backdrop backdrop--open" : "backdrop"}
      onClick={close}
    ></div>
  );
}
