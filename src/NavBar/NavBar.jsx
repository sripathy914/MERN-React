import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <ol>
            <li><Link to="/Home" class="navlink">Home</Link></li>
            <li><Link to="/About" class="navlink">About</Link></li>
            <li><Link to="/Achievements" class="navlink">Achievements</Link></li>
            <li><Link to="/ContactUs" class="navlink">Contact Us</Link></li>
            {/* <li><Link to="/Login">Login/Signup</Link></li> */} 
        </ol>
        
    )
}
export default NavBar; 
 