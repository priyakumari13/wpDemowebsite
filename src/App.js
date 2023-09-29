import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Project from "./Components/Project/Project";
import About from "./Components/About/About";


import './app.css';
import Service from "./Components/Services/Service";
import Client from "./Components/Client/Client";
import Contact from "./Components/Contact/Contact";

const App=()=>{
    return(
        <div>
           <Navbar/>
           <Home/>           
           <About/>
           <Service/>
           <Project/>
           <Client/>
           <Contact/>
        </div>
      
    )

}
export default App;