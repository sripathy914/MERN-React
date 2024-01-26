import React from "react";
import './Login.css';

const Login =() =>{
        return (
            <div class="container">
                <div class="form1">
                    
                    <div class="form2">
                        <h2>Login</h2>
                        <form>
                            <table>
                                <tr>
                                    <td><input type="text" placeholder="Enter your name"></input></td>
                                </tr>

                                <tr>
                                    <td><input type="email" placeholder="Enter your email"></input></td>
                                </tr>

                                <tr>
                                    <td><input type="password" placeholder="Enter your ****"></input></td>
                                </tr>

                                <div class="buttons">
                                    <button class="button1" type="submit">Login</button>
                                    <button class="button2" type="submit">Signup</button>
                                </div>

                            </table>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
export default Login;
