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
                    <p class="para">A Aspirical enthusiast who Lorem ipsum dolor sit amet consectetur adipisicing
                        <br />elit. Labore, dolores Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="homebuttons">
                    <Link to="/About"><button class="explore">Explore</button></Link>
                </div>
            </div>
        </div>

    )
}
export default Home;