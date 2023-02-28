import React from "react";
import "./Project.css";

import buffer from "../Image/postadda.png";
import bufferlogin from "../Image/postadda login.png";
import envoy from "../Image/envoy.png";
import envoylogin from "../Image/envoy login.png";
import gearbest from "../Image/gearbest.png";
import gearlogin from "../Image/gearbest login.png";
import shoelap from "../Image/shoeLap.png";
import shoemo from "..//Image/shoeMobile.png"
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
      name: "Famous Footwear website",
      pro_img: shoelap,
      phone_img: shoemo,
      url: "https://github.com/pallavijainy/scenic-wood-5639",
      deploy_url: "https://shoe-land-hub.vercel.app/",
      web_url: "booking.png",
      description:
        "Clone of Famous Footwear website a diverse portfolio of global footwear brands dedicated to helping every person find the perfect pair of shoes.",
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
      id: "2",
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
      id: "3",
      name: "Gearbest",
      pro_img: gearbest,
      phone_img: gearlogin,
      url: "https://github.com/pallavijainy/spicy-nerve-9354",
      deploy_url: "https://gorgeous-entremet-2b94c9.netlify.app/",
      web_url: "booking.png",
      description:
        "Clone of Gearbest website which provides high quality products and services",
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
                <img src={el.pro_img} alt="pallavi" />
              </div>
              <div>
                <img src={el.phone_img} alt="pallavi" />
              </div>
            </div>
            <div>
              <p className="super-name">{el.name}</p>
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
                <div className="tech-stack" marginTop="20px">
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
              <p className="super-des" style={{ color: "black" ,marginTop:"30px"}}>
                {el.description}
              </p>
              <div className="func-buttons" >
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
