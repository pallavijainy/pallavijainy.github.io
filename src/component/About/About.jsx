import React, { useEffect } from "react";
import "./About.css";
import profile from "../Image/image.jpg";

import AOS from "aos";

import Typewriter from "typewriter-effect";
export default function About() {
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
            <a
              href="https://drive.google.com/uc?export=download&id=1YAp-ywxagyg4lRCHMDKg6z4jAPTq8CEP"
              download="fw20_0577-Pallavi-Jain-Resume"
              target="_blank"
              rel="noopener noreferrer"
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
