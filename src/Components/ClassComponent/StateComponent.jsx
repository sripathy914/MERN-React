import React from "react";

class StateComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            rollno: "21CDR050",
            name: "sripathy"
        };
    }

    changeState = () => {
        this.setState({
            name: "Sending the password"
        });
    };

    render() { 
        return (
            <div>
                <h1>This is StateComponent...</h1>
                <h2>
                    hello, {this.state.name} and your rollno is {this.state.rollno}
                </h2>
                <button onClick={this.changeState}>forgot password</button>
                {/* Use the updatedName variable if needed */}
            </div>
        );
    }
}

export default StateComponent;
