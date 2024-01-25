import React from "react";
import TestComponent from "../FunctionComponent/TestComponent";

class LoginComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Login your credentials...</h1>
                <TestComponent/>
            </div>

        )
    }
}
export default LoginComponent;