
import { useState } from 'react';
import './App.css';
import About from './component/About/About';
import Aboutme from './component/Aboutme/Aboutme';
import Backdrop from './component/Header/Backdrop';
import Header from './component/Header/Header';
import Sidebar from './component/Header/Sidebar';
import Works from './component/Skill/Works';

import Footer from './component/Footer/Footer';
import { useContext } from "react";
import { themeContext } from "../src/component/Context"

import Projects from "./component/Project/project.jsx"

import GithubStats from './component/Github/Github_stats';
import { Stack } from '@chakra-ui/react';



function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = ()=> {
    setSidebar((prevState)=> !prevState)
  }

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
   
    <div className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
     
      <Header openSidebar={toggleSidebar} sidebar={sidebar}/>
      <Backdrop sidebar={sidebar} close={toggleSidebar}/>
      <Sidebar close={toggleSidebar} sidebar={sidebar}/>
      <About/>
      <Aboutme/>
      <Works/>
     
     <Projects/>
      <GithubStats/>
    <Footer/>
   
    </div>
  );
}

export default App;
