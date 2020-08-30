import React from 'react';
import './index.css';
import SpotifyWebApi from './spotify-web-api.js';

const spotifyApi = new SpotifyWebApi()

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          name: '',
        };
    }
    componentDidMount() {
        let accessToken =  new URLSearchParams(window.location.search).get('access_token')
        let artistID = '1z4g3DjTBBZKhvAroFlhOM'
        fetch('https://api.spotify.com/v1/artists/' + artistID, {
            headers: {'Authorization': 'Bearer ' + accessToken}
        }).then(response => response.json())
        .then(data => this.setState({name: data.name}))
        
    }

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}

export default App;