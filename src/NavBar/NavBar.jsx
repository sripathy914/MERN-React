import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <ol>
            <li class="homebutton"><Link to="/" class="navlink">Home</Link></li>
            <li class="homebutton"><Link to="/About" class="navlink">About</Link></li>
            {/* <li><Link to="/Achievements" class="navlink">Achievements</Link></li> */}
            <li class="homebutton"><Link to="/ContactUs" class="navlink">Contact Us</Link></li>
            <li class="homebutton"><Link to="/Login" class="navlink">Login/Signup</Link></li>   
            </ol>
        
    )
}
export default NavBar; 
  