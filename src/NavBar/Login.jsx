import React from "react";
import './Login.css';
import { Link } from "react-router-dom";
import Signup from './Signup'

const Login =() =>{
        return (
            <div class="loginsignup">
                <div class="container">
                    <div class="form1">
                        <div class="form2">
                            <h2 class="logintext">Login</h2>
                            <form>
                                <table>
                                    

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
                                        <button class="button1" type="submit">Login</button> 
                                    </div>
                                    <div class="signupbutton"> 
                                        <p class="accountclass">Don't have an account,</p>
                                        <Link to="/Signup"><button class="button2">Signup</button></Link>
                                    </div>
                                </table>

                            </form>
                        </div> 
                    </div>
                </div>
            </div>    
        )
    }
export default Login;
