import React from 'react';
import './index.css';

class LoginButton extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
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