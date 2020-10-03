import React from 'react';
import './index.css';

class LibraryGenrePartition extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          name: '',
          genre: '',
          listOfGenres: []
        };
        this.updateGenreState = this.updateGenreState.bind(this)
    }

    partitionLibrary(genre) {
        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
            headers: {'Authorization': 'Bearer ' + this.props.accessToken}
        }).then(response => response.json())
        .then(data => console.log(data))
        console.log("hello")
    }

    componentDidMount() {
        fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
            headers: {'Authorization': 'Bearer ' + this.props.accessToken}
        }).then(response => response.json())
        .then(data => this.setState({listOfGenres: data.genres}))
    }

    createDropDown() {
        return (
            <select id="selector" onChange={this.updateGenreState}>
                {this.state.listOfGenres.map(this.createOption)}
            </select>
        )
    }

    createOption(option) {
        return <option key={option}>{option}</option>
    }

    updateGenreState() {
        let genreValue = document.getElementById("selector").value
        this.setState({genre: genreValue})
    }

    render() {
        return (
            <div className="widget">
                {this.createDropDown()}
            </div>
        )
    }
}

export default LibraryGenrePartition;