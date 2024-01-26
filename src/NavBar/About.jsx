import React from "react";
import { useReducer } from "react";
import './NavBar.css'
import './Login.css'

const value={count:0}
const countFunction=(state,action) =>{
    switch(action.type)
    {
        case "sub":
            return {count:state.count-1}
        case "add":
            return {count:state.count+1}
        default:
            return {count:value.count}
    }
}
const About=() =>{ 
    const[state,dispatch]=useReducer(countFunction,value)
    return(
        <div class="aboutpage">
            <h2>Count: {state.count}</h2> 
            <button onClick={ ()=>dispatch({type:"add"}) } class="button2">+</button>
            <button onClick={ ()=>dispatch({type:"sub"}) } class="button2">-</button>
            <button onClick={ ()=>dispatch({type:"reset"}) } class="button1">Reset</button>
        </div>
    )
}
 
export default About;