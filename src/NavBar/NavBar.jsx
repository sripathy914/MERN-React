import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <ol>
            <li><Link to="/Home" class="navlink">Home</Link></li>
            <li><Link to="/About" class="navlink">About</Link></li>
            <li><Link to="/Achievements" class="navlink">Achievements</Link></li>
            <li><Link to="/ContactUs" class="navlink">Contact Us</Link></li>
<<<<<<< HEAD
             <li><Link to="/Login" class="navlink">Login/Signup</Link></li>  
=======
             <li><Link to="/Login">Login/Signup</Link></li>  
>>>>>>> 183d68a8a20e30201babff59446916bfaca1f8e6
        </ol>
        
    )
}
export default NavBar; 
  