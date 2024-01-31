import React from "react";
import './About.css'

import { Link } from "react-router-dom";

const About = () => { 
    return (
        <div class="total">
            <div class="image">
                <div className="super">
                    <h1 class="whoiam">Who am<span class="ispan" style={{ color: "white" }}> I </span>?</h1>
                    <div className="main">
                        <div class="innertext">
                            As a Computer Science enthusiast, I thrive on exploring diverse technologies, from AR/VR
                            innovations to full-stack development. I aspire to contribute inventive solutions, stay abreast
                            of emerging fields, and foster growth in a collaborative environment. Committed to lifelong
                            learning, I aim to make impactful contributions to the evolving landscape of technology.
                        </div>
                    </div>
                </div>
            </div>
            <div class="outofimage">
                <div class="super1">
                    <h1 class="skills">Skill Set</h1> 
                    <div class="main2">
                        <div class="box5">
                            <div class="tech"> 
                                <h1 class="head">Technical Skills</h1>
                                <ol class="techskills">
                                    <li>Full Stack Development</li> 
                                    <li>CI/CD, git, github VCS</li>
                                    <li>C, Python, Java, C#, C++</li>
                                    <li>Agile Methodology</li>
                                    <li>Lean Methodology</li>
                                    <li>Extended Reality (XR)</li> 
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="main1">
                        <div class="box3">
                            <div class="design">
                                <h1 class="head">Design Skills</h1>
                                    <ol class="designskills">
                                        <li>Wireframing</li>
                                        <li>Prototyping</li>
                                        <li>WIP</li>
                                        <li>Web Design with MERN</li>
                                        <li>3D smoothing</li>  
                                    </ol>
                            </div>
                        </div>
                        <div class="box4">
                            <div class="soft"> 
                                <h1 class="head">Soft Skills</h1>
                                <ol class="softskills">
                                    <li>Detail-Oriented</li>
                                    <li>Innovative Thinking</li>
                                    <li>Continuous Learner</li>
                                    <li>Time Management</li>     
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="super2">
                    <h1 class="skills2">Academics</h1>  
                    <div class="main3">
                        <div class="box6">
                            <div className="academics"> 
                                <div className="college"> 
                                    Bachelor of Computer Science And Design,<br/>
                                    Kongu Engineering College<br/>
                                    2021 – present<br/>
                                    CGPA till 4th semester - 8.39
                                </div>
                                <div className="hsc">
                                    HSC, Little Angels Hr. Sec. School<br/> 
                                    2021 | Namakkal<br/>
                                    95.4%
                                </div>
                                <div className="sslc">
                                    SSLC, Little Angels Matric School<br/> 
                                    2019 | Namakkal<br/> 
                                    94.6% 
                                </div> 
                            </div>
                        </div>
                    </div> 
                </div> 
                <div className="reverseimage">
                    <div class="super6">  
                        <h1 class="skills">Languages<br></br>Known</h1>
                        <div class="main4"> 
                            <div class="box7"> 
                                <h1 class="head">Tamil</h1>
                                <div class="language">Native proficiency</div> 
                            </div>
                            <div class="box7">
                                <h1 class="head">Telugu</h1>
                                <div class="language">Native proficiency</div>
                            </div>
                        </div>
                        <div class="main4">
                            <div class="box7"> 
                                <h1 class="head">English</h1>
                                <div class="language">Conversational proficiency <br/> Proficient in writing</div>
                            </div>
                            <div class="box7">
                                <h1 class="head">Hindi</h1>
                                <div class="language">Conversational proficiency <br/> Proficient in writing</div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="super2"> 
                    <h1 class="skills2">Achievements </h1> 
                    <div class="main5">
                        <div class="box8"> 
                            <div className="achievements">
                                <div className="coding">
                                    First place in Bytes Blitz Coding - an Intra college level Competition
                                </div>
                                <div className="hackathon"> 
                                    Participated in largest National level Hackathon - SIH 2023 
                                </div>
                                <div className="academic">
                                    Academic Excellence Scholarship Rs.20000
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div> 
                <div class="super7"> 
                    <div class="homebuttons"> 
                        <Link to="/Login"><button class="explore1">Projects</button></Link>  
                    </div> 
                </div>  
            </div>
        </div>
    ) 
}
export default About; 