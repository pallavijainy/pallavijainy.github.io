import React, { useEffect } from "react";
import "./About.css";
import profile from "../Image/image.jpg";

import AOS from "aos";

import Typewriter from "typewriter-effect";
export default function About() {
  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1D8_iAg_LlQG-qnCfg6QRc2qFKs6tcXey/view?usp=share_link",
      "_blank" , "noreferrer"
    );
  };
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="home" className="about">
      <div className="about-container">
        <div className="left" data-aos="fade-up">
          <p className="hello">Hello 👋.</p>
          <p className="intro" style={{ paddingTop: "30px" }}>
            I'm
            <span id="name">
              <Typewriter
                options={{
                  strings: ["Pallavi Jain"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <div className="type">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Web Developer !",
                  "Tech Enthusiast,",
                  "Life-Long Learner.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <div id="button">
            <a onClick={handleClick}
              href="https://drive.google.com/uc?export=download&id=1D8_iAg_LlQG-qnCfg6QRc2qFKs6tcXey"
              download="fw20_0577-Pallavi-Jain-Resume"
            >
            
              <button>RESUME</button>
            </a>
          </div>
        </div>
        <div className="about-img" data-aos="fade-up">
          <img src={profile} alt="pj" />
        </div>
      </div>
    </div>
  );
}
