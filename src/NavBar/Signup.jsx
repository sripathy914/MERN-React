import React from "react";
import './Login.css';
import Login from "./Login";
import { Link } from "react-router-dom"; 

const Signup =() =>{
        return (
            <div class="loginsignup"> 
                <div class="container">
                    <div class="form1">
                        <div class="form2">
                            <h2 class="logintext">Register</h2>  
                            <form>
                                <table>
                                    <tr>
                                        <td><input type="text" placeholder="Enter your name"></input></td>
                                    </tr>

                                    <tr>
                                        <td><input type="email" placeholder="Enter your email"></input></td>
                                    </tr>

                                    <tr>
                                        <td><input type="password" placeholder="Enter your Password"></input></td>
                                    </tr>
                                    <div  class="anchor">
                                        <a href="#">forgot password?</a> 
                                    </div>
                                    <div class="loginbutton">
                                        <button class="button1">SignUp</button>
                                    </div>
                                    <div class="signupbutton"> 
                                        <p class="accountclass">Already have an account,</p>
                                        <Link to="/Login"><button class="button2">Login</button></Link>
                                    </div>
                                </table>

                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
export default Signup;
