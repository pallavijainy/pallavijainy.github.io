import React, { useContext } from "react";
import "./Works.css";

import javascript from "../Image/javascript.jpg"
import REACT from "../Image/REACT.png";
import html1 from "../Image/html1.png";
import ts from "../Image/ts.png";
import CSS from "../Image/CSS.png";
import redux from "../Image/redux.png";
// import backend from "../Image/backend.png";
import node from "../Image/node.webp"
import ex from "../Image/ex.png";
import npm from "../Image/npm.png";
import github from "../Image/github.png";
import mongo from "../Image/mongo.png";
import {themeContext} from "../Context"
import { motion } from "framer-motion";
// import {Link} from 'react-scroll'
import vs from "../Image/vscode.png"
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  // transition
  return (
    <>
     <div className="works" id="works" style={{width:"80%",margin:"auto"}}> 
      {/* left side */}
      <div className="w-left">
        <div className="awesome" style={{marginTop:"20px"}}>
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Front-End Developer
          </span>
          <span>Skills</span>
          <span>
            I have designed and developed 
            <br />
            front-end using React,Redux,
            <br/>
            Html,css,Javascript,Typescript.
          </span>
         
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle" >
            <img src={html1} alt="" style={{borderRadius:"50%"}} />
          </div>
          <div className="w-secCircle">
            <img src={javascript} alt="" style={{borderRadius:"50%"}}/>
          </div>
          <div className="w-secCircle">
            <img src={REACT} alt="" style={{borderRadius:"50%"}} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={CSS} alt="" style={{borderRadius:"50%"}}/>
          </div>
         
          <div className="w-secCircle">
            <img src={ts} alt="" style={{borderRadius:"50%"}} />
          </div>
          <div className="w-secCircle">
            <img src={redux} alt="" style={{borderRadius:"50%"}}/>
          </div>
        </motion.div>
        
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
     
    </div>

{/* ///////////////////////////////////////////////// */}


     <div className="works" id="works" style={{width:"80%",margin:"auto"}}>
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Back-End Developer 
          </span>
          <span>Skills</span>
          <span>
           In backend i have a proficiency in
            <br />
           MongoDB, ExpressJS ,NodeJS ,npm ,Github,MySQL
          
          </span>
         
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
           
            <img src={github} alt="" style={{borderRadius:"50%",width:"150px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={mongo} alt="" style={{borderRadius:"50%",width:"200px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={vs} alt="" style={{borderRadius:"50%",width:"150px"}}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={ex} alt="" style={{borderRadius:"50%",width:"150px"}}/>
          </div>
         
          <div className="w-secCircle">
          <img src={node} alt="" style={{borderRadius:"50%",width:"200px"}}/>
          </div>
          <div className="w-secCircle">
            <img src={npm} alt="" style={{borderRadius:"50%",width:"150px"}}/>
          </div>
        </motion.div>
        
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
     
    </div>
    
    </>
   
  );
};

export default Works;
