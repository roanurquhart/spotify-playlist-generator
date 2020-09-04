import React from 'react';
import './index.css';
//import { Redirect } from "react-router-dom";

class LoginButton extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          name: '',
        };
    }

    loginToSpotify() {
        window.location.href = "http://localhost:8888/login"
    }

    render() {
        return (
            <div className="LoginButton">
                <button onClick={this.loginToSpotify}>Login</button>
            </div>
        )
    }
}

export default LoginButton;