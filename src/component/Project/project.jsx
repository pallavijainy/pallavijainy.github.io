import React from "react";
import "./Project.css";
// import sephora from "../images/projects/zee5/2_macbookgold_front.png";
// import zee1 from "../images/projects/zee5/5_iphone13promaxgold_portrait.png";
// import zee5 from "../images/projects/zee5/1_macbookgold_front.png";
// import zee2 from "../images/projects/zee5/4_ipad_gold_landscape.png";
// import sep1 from "../images/projects/sephora/1_macbookpro15_front.png";
// import sep2 from "../images/projects/sephora/6_iphone13red_portrait.png";
// import you1 from "../images/projects/sephora/youtube.png";
// import you2 from "../images/projects/sephora/1_iphone12minired_portrait.png";
// import wea1 from "../images/projects/sephora/weatherapp.png";
// import wea2 from "../images/projects/sephora/2_iphone12minired_portrait.png";
import buffer from "../Image/Screenshot (596).png";
import bufferlogin from "../Image/Screenshot (602).png";
import envoy from "../Image/Screenshot (597).png";
import envoylogin from "../Image/Screenshot (606).png";
import gearbest from "../Image/Screenshot (605).png";
import gearlogin from "../Image/Screenshot (604).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

const projects = {
  data: [
    {
      id: "0",
      name: "Buffer website",
      pro_img: buffer,
      phone_img: bufferlogin,
      url: "https://github.com/pallavijainy/-daffy-driving-936",
      deploy_url: "https://dazzling-cupcake-639b07.netlify.app/",
      web_url: "booking.png",
      description:
        "Clone of Buffer website which helps to manage posts on different social Media.",
      languages: [
        {
          name: faReact,
        },
        {
          name: faHtml5,
        },
        {
          name: faCss3,
        },
        {
          name: faJs,
        },
      ],
    },
    {
      id: "1",
      name: "Envoy clone",
      pro_img: envoy,
      phone_img: envoylogin,
      url: "https://github.com/pallavijainy/omniscient-dust-8885",
      deploy_url: "https://majestic-pixie-05b6b1.netlify.app/",
      web_url: "mailchimp.png",
      description:
        "Clone of Envoy website which Bring people together with a flexible workplace platform.This was a collaborative project.",
      languages: [
        {
          name: faHtml5,
        },
        {
          name: faCss3,
        },
        {
          name: faJs,
        },
      ],
    },
    {
      id: "2",
      name: "Gearbest",
      pro_img: gearbest,
      phone_img: gearlogin,
      url: "https://github.com/pallavijainy/spicy-nerve-9354",
      deploy_url: "https://gorgeous-entremet-2b94c9.netlify.app/",
      web_url: "booking.png",
      description:
        "clone of Gearbest website which will always provide high quality products and services",
      languages: [
        {
          name: faHtml5,
        },
        {
          name: faCss3,
        },
        {
          name: faJs,
        },
      ],
    }
   
  ],
};

export default function Projects() {
  return (
    <div id="projects" className="projects-container">
      <p>Projects</p>
      <div className="project-cards">
        {projects.data.map((el) => (
          <div className="project">
            <div id="project-cards-image">
              <div>
                <img src={el.pro_img} alt="akash" />
              </div>
              <div>
                <img src={el.phone_img} alt="akash" />
              </div>
            </div>
            <div>
              {el.languages.length <= 3 ? (
                <div className="tech-stack">
                  <FontAwesomeIcon
                    className="aaa"
                    icon={el.languages[0].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaa"
                    icon={el.languages[1].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaa"
                    icon={el.languages[2].name}
                  ></FontAwesomeIcon>
                </div>
              ) : (
                <div className="tech-stack">
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[0].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[1].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[2].name}
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    className="aaaa"
                    icon={el.languages[3].name}
                  ></FontAwesomeIcon>
                </div>
              )}
              <p className="super-name">{el.name}</p>
              <p className="super-des" style={{color:"black"}}>{el.description}</p>
              <div className="func-buttons">
                <a href={el.url} target="_blank">
                  <button>GitHub</button>
                </a>
                <a href={el.deploy_url} target="_blank">
                  <button>Live</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



