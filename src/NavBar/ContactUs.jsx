import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import './ContactUs.css'

import { Link } from "react-router-dom";

const ContactUs = () =>{ 
    return (
        <div class="loginsignup"> 
                <div class="container">
                    <div class="form1c">
                        <div class="form2c">
                            <h2 class="logintext">Any queries..</h2>  
                            <form>
                                <table>
                                    <tr>
                                         
                                        <td><input type="text" placeholder="Enter your name" class="input1"></input></td> 
                                        
                                    </tr>

                                    <tr>
                                        <td><input type="email" placeholder="Enter your email" class="input2"></input></td>
                                    </tr>

                                    <tr>
                                        <td><textarea type="password" placeholder="Please free to type" style={{}}></textarea></td>
                                    </tr>
                                    
                                    <div class="loginbutton">
                                        <button class="button1">Submit</button>
                                    </div>
                                    
                                </table>

                            </form> 
                        </div>
                    </div>
                </div>
            </div>    
    )
}
export default ContactUs; 