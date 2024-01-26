import React, { useState } from "react";
import './NavBar.css';

const About = () =>{
    const [college,updateCollege]=useState("KEC");
    const clg = () =>{ 
        console.log("Kongu engg clg");
        updateCollege(college+"Kongu Engineering College");
    }
    
    return(
        <div class="home">
            <h1>Welcome to {college}.</h1>
            <button onDoubleClick={clg}>Update College Name</button>
        </div>
    )
}
export default About;