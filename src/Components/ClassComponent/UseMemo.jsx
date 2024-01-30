import React, { useState } from "react";
import { useMemo } from "react";

const Memo=()=>
{
    const [number,upatenumber]=useState(0)
    const doubleNumber=doubleNumberSlow(number)
    const [dark,updatetheme]=useState(false)
    function doubleNumberSlow(number)
    {
        return 2* number
    }
    const theme= useMemo(()=>{
        return {
            backgroundColor:dark?"black":"white", 
            color:dark?"black":"white"
        }
    },[dark])
    return(
        <div>
            <h1>This is a dangerous hook which is called useMemo</h1>
            <input type="number" value={number} onChange={(event)=>upatenumber(event.target.value)} />
            <button onClick={()=>{updatetheme(dark=>!dark)}}>Change Theme</button>
            <h2>The doubled number is {doubleNumber}</h2>

        </div>
    )
}

export default Memo