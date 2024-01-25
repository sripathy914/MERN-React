import React from "react";

class StateComponent extends React.Component
{
    constructor()
    {
        super() 
        this.state={
            rollno:"21CDR050",
            name:"sripathy"
        }
    }
    
    changeState = () => {
        this.state.name="Sending the password";
    }
    render()
    {
        return(
            <div>
                <h1>
                    This is StateComponent... 
                </h1>
                <h2>
                    hello, {this.state.name} and your rollno is {this.changeState}
                </h2>
                <button onClick={this.changeState}>forgot password</button>
                {/* <h2>
                    {this.state.name} to {this.changeState()}   
                </h2> */}
            </div>
        )
    }
}
export default StateComponent;