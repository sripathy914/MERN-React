import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <ol>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Achievements">Achievements</Link></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
        </ol>
    )
}
export default NavBar;
