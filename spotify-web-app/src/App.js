import React from 'react';
import './index.css';
import LoginButton from './LoginButton.js';
import LibraryGenrePartition from './LibraryGenrePartition';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          name: '',
          accessToken: new URLSearchParams(window.location.search).get('access_token') ? new URLSearchParams(window.location.search).get('access_token') :''
        };
    }

    getRequest() {
        let artistID = '1z4g3DjTBBZKhvAroFlhOM'
        fetch('https://api.spotify.com/v1/artists/' + artistID, {
            headers: {'Authorization': 'Bearer ' + this.state.accessToken}
        }).then(response => response.json())
        .then(data => this.setState({name: data.name}))
    }
    componentDidMount() {
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
                <LibraryGenrePartition accessToken={this.state.accessToken}/>
            </div>
        )
    }
}

export default App;