import React, { useEffect } from "react";
import "./About.css";
import profile from "../Image/image.jpg"

import AOS from "aos";
import download from "../Download/Pallavi_Jain_Resume (1).pdf"
import Typewriter from "typewriter-effect";
export default function About() {

  
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  function handleClick(){
    window.open("https://drive.google.com/file/d/1YAp-ywxagyg4lRCHMDKg6z4jAPTq8CEP/view?usp=sharing",'_blank');
}
  return (
    <div id="home" className="about"  >
      <div className="about-container" >
        <div className="left" data-aos="fade-up" >
          <p className="hello">Hello 👋.</p>
          <p className="intro" style={{paddingTop:"30px"}} >
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
          <div className="type" >
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
       <a href={download} download="Pallavi_Jain_Resume">
               <button onClick={handleClick}>Resume</button>
             </a>
           </div>
       
        
        </div>
        <div className="about-img" data-aos="fade-up" >
         <img src={profile} alt="pj" />
         </div>
      </div>
    </div>
  );
}



