import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import './About.css'

const About = () => {
    return (
        <div class="total">
            <div class="image">
                <div className="super">
                    <h1 class="whoiam">Who<span class="ispan" style={{ color: "white" }}>I</span>am ?</h1>
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
                    <div class="main1">
                        <div class="box3"></div>
                        <div class="box4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;