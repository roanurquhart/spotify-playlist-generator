import React from 'react';
import './index.css';
import LoginButton from './LoginButton.js';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          name: '',
          accessToken:''
        };
    }

    getRequest() {
        //let accessToken =  new URLSearchParams(window.location.search).get('access_token')
        let artistID = '1z4g3DjTBBZKhvAroFlhOM'
        fetch('https://api.spotify.com/v1/artists/' + artistID, {
            headers: {'Authorization': 'Bearer ' + this.state.accessToken}
        }).then(response => response.json())
        .then(data => this.setState({name: data.name}))

        //<h2>{this.state.name}</h2>
    }
    componentDidMount() {
        let access = new URLSearchParams(window.location.search).get('access_token')
        this.setState({accessToken: access ? access : ''})
        console.log(this.state.accessToken)
    }

    render() {
        return this.state.accessToken === '' ? (
            <div className="App">
                <h1>Spotify Playlist Generator</h1>
                <LoginButton/>
            </div>
        )
        :
        (
            <div className="App">
                <h1>Spotify Playlist Generator</h1>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default App;