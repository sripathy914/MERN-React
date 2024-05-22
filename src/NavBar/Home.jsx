import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
    return (
        <div>
            <div class="home">
                <div class="div1">
                    <h1 className="sripathy">Hey there,<span class="srispan"> I am Sripathy R S</span></h1>
                    <p class="para">As a Computer Science enthusiast, I thrive on exploring diverse technologies, from AR/VR <br></br>
                        innovations to full-stack development. Eager to collaborate with professionals, contribute to <br></br>
                        impactful projects, and drive technological advancements forward.
                    </p>
                </div>
                <div class="homebuttons">
                    <Link to="/About"><button class="explore">Explore</button></Link>
                </div>
            </div>
        </div>

    )
}
export default Home;
